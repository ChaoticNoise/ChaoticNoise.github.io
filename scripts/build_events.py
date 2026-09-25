#!/usr/bin/env python3
"""Build events.json (used by main.js) and feed.xml (RSS) from events.yml.

events.yml is the only file you should edit by hand. Run this script
(or let the GitHub Action run it) to regenerate the other two:

    pip install pyyaml
    python3 scripts/build_events.py
"""

import datetime as dt
import difflib
import json
import sys
from email.utils import format_datetime, parsedate_to_datetime
from pathlib import Path
from xml.etree import ElementTree
from xml.sax.saxutils import escape

import yaml
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent.parent
EVENTS_YML = ROOT / "events.yml"
EVENTS_JSON = ROOT / "events.json"
FEED_XML = ROOT / "feed.xml"
FLIERS_DIR = ROOT / "event_fliers"

SITE = "https://chaoticnoise.com"
TZ = ZoneInfo("America/Los_Angeles")
TIME_FORMATS = ("%I:%M %p", "%I:%M%p", "%I %p", "%I%p", "%H:%M")

FEED_HEADER = """<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/feed.xsl"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Chaotic Noise Marching Corps – Events</title>
    <link>https://chaoticnoise.com</link>
    <description>Upcoming and past shows from Chaotic Noise Marching Corps, Seattle's renegade brass band.</description>
    <language>en-us</language>
    <atom:link href="https://chaoticnoise.com/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://chaoticnoise.com/images/chaotic_logo.png</url>
      <title>Chaotic Noise Marching Corps</title>
      <link>https://chaoticnoise.com</link>
    </image>
"""

FEED_FOOTER = """
  </channel>
</rss>
"""


class EventError(Exception):
    pass


def parse_date(value, where):
    if isinstance(value, dt.date):
        return value
    try:
        return dt.date.fromisoformat(str(value).strip())
    except ValueError:
        raise EventError(f"{where}: date must look like 2026-09-12, got {value!r}")


def parse_time(value, where):
    if isinstance(value, int):
        # YAML reads an unquoted 20:00 as a number; ask for quotes instead of guessing.
        raise EventError(f'{where}: put the time in quotes, e.g. time: "20:00" or time: 8:00 PM')
    text = str(value).strip().upper().replace(".", "")
    for fmt in TIME_FORMATS:
        try:
            return dt.datetime.strptime(text, fmt).time()
        except ValueError:
            pass
    raise EventError(f"{where}: time must look like 8:00 PM, got {value!r}")


def display_time(start):
    hour = start.strftime("%I").lstrip("0")
    return f"{start:%B} {start.day}, {start.year}, {hour}:{start:%M %p}"


def load_events():
    raw = yaml.safe_load(EVENTS_YML.read_text(encoding="utf-8")) or []
    if not isinstance(raw, list):
        raise EventError("events.yml must be a list of events (each one starting with '- title:')")

    events = []
    for n, item in enumerate(raw, 1):
        where = f"events.yml event #{n} ({item.get('title', 'no title') if isinstance(item, dict) else item!r})"
        if not isinstance(item, dict):
            raise EventError(f"{where}: expected fields like 'title:' and 'date:'")
        for field in ("title", "date", "time"):
            if not item.get(field):
                raise EventError(f"{where}: missing '{field}'")
        unknown = set(item) - {"title", "date", "time", "url", "location", "map", "flier", "id"}
        if unknown:
            raise EventError(f"{where}: unknown field(s) {', '.join(sorted(unknown))}")

        start = dt.datetime.combine(
            parse_date(item["date"], where), parse_time(item["time"], where), tzinfo=TZ
        )

        flier = item.get("flier")
        if flier and not str(flier).startswith(("http://", "https://")):
            if not (FLIERS_DIR / flier).is_file():
                names = [p.name for p in FLIERS_DIR.iterdir()]
                close = difflib.get_close_matches(flier, names, n=1)
                hint = f" Did you mean '{close[0]}'?" if close else ""
                raise EventError(f"{where}: flier '{flier}' not found in event_fliers/.{hint}")
            flier = f"event_fliers/{flier}"

        events.append({
            "title": str(item["title"]).strip(),
            "url": item.get("url") or SITE,
            "location": item.get("location") or "",
            "map": item.get("map") or "",
            "flier": flier,
            "start": start,
            "id": item.get("id"),
        })

    events.sort(key=lambda e: e["start"])
    assign_ids(events)
    return events


def assign_ids(events):
    """Give every event a stable RSS guid: chaoticnoise-event-YYYYMMDD, plus a/b/c
    when several events share a date. An explicit 'id:' in events.yml wins."""
    by_date = {}
    for e in events:
        by_date.setdefault(e["start"].date(), []).append(e)
    for day, same_day in by_date.items():
        for i, e in enumerate(same_day):
            if not e["id"]:
                suffix = "abcdefghijklmnopqrstuvwxyz"[i] if len(same_day) > 1 else ""
                e["id"] = f"{day:%Y%m%d}{suffix}"
            e["id"] = str(e["id"])

    seen = set()
    for e in events:
        if e["id"] in seen:
            raise EventError(f"two events share the id '{e['id']}'; give one of them a different 'id:'")
        seen.add(e["id"])


def absolute(url):
    return url if url.startswith(("http://", "https://")) else f"{SITE}/{url}"


def build_json(events):
    data = [
        {
            "title": e["title"],
            "url": e["url"],
            "location": e["location"],
            "map": e["map"],
            "start": e["start"].isoformat(),
            "time_display": display_time(e["start"]),
            "image": e["flier"],
        }
        for e in events
    ]
    return json.dumps(data, indent=2, ensure_ascii=False) + "\n"


def existing_pub_dates():
    """Keep each item's original pubDate so feed readers don't re-announce old events."""
    if not FEED_XML.exists():
        return {}
    try:
        channel = ElementTree.parse(FEED_XML).getroot().find("channel")
    except ElementTree.ParseError:
        return {}
    dates = {}
    for item in channel.findall("item"):
        guid, pub = item.findtext("guid"), item.findtext("pubDate")
        if guid and pub:
            dates[guid] = pub
    return dates


def build_feed(events, now):
    old_dates = existing_pub_dates()
    items = []
    for e in events:
        guid = f"chaoticnoise-event-{e['id']}"
        pub = old_dates.get(guid) or format_datetime(now.replace(microsecond=0))
        items.append((pub, e, guid))

    items.sort(key=lambda t: (parsedate_to_datetime(t[0]), t[1]["start"]), reverse=True)

    out = [FEED_HEADER]
    for pub, e, guid in items:
        desc = escape(e["location"])
        if e["map"]:
            desc += f'. <a href="{escape(e["map"])}">Map</a>'
        if e["flier"]:
            desc += f'<br><img src="{escape(absolute(e["flier"]))}" alt="Event flier">'
        out.append(f"""
    <item>
      <title>{escape(e['title'])} - {e['start']:%Y/%m/%d}</title>
      <link>{escape(e['url'])}</link>
      <guid isPermaLink="false">{guid}</guid>
      <pubDate>{pub}</pubDate>
      <description><![CDATA[{desc}]]></description>
    </item>
""")
    out.append(FEED_FOOTER)
    return "".join(out)


def write_if_changed(path, content):
    if path.exists() and path.read_text(encoding="utf-8") == content:
        return False
    path.write_text(content, encoding="utf-8")
    return True


def main():
    try:
        events = load_events()
    except EventError as err:
        print(f"error: {err}", file=sys.stderr)
        return 1

    now = dt.datetime.now(TZ)
    for path, content in ((EVENTS_JSON, build_json(events)), (FEED_XML, build_feed(events, now))):
        status = "updated" if write_if_changed(path, content) else "unchanged"
        print(f"{path.name}: {status}")
    print(f"{len(events)} events")
    return 0


if __name__ == "__main__":
    sys.exit(main())
