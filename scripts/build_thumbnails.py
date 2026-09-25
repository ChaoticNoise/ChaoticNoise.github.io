#!/usr/bin/env python3
"""Make small, good-looking thumbnails of the event fliers and photos.

For every image in event_fliers/ and images/, writes a WebP copy into
thumbs/ (e.g. event_fliers/show.jpg -> thumbs/event_fliers/show.webp).
Pages show the thumbnail and only load the full-size image when someone
clicks it. Thumbnails of deleted images are removed.

    pip install pillow
    python3 scripts/build_thumbnails.py
"""

import io
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
THUMBS = ROOT / "thumbs"
SOURCES = ("event_fliers", "images")
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}

MAX_WIDTH = 480   # sharp on high-DPI screens at the sizes the pages use
MAX_HEIGHT = 960
QUALITY = 82


def thumb_path(image):
    """Site-relative thumbnail path for a site-relative image path like 'event_fliers/x.jpg'."""
    return f"thumbs/{Path(image).with_suffix('.webp').as_posix()}"


def make_thumbnail(src):
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        im.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "WEBP", quality=QUALITY, method=4)
        return buf.getvalue()


def main():
    wanted = {}
    for folder in SOURCES:
        for src in sorted((ROOT / folder).iterdir()):
            if src.suffix.lower() not in EXTENSIONS:
                continue
            dest = ROOT / thumb_path(f"{folder}/{src.name}")
            if dest in wanted:
                print(f"error: {src.name} and {wanted[dest].name} would share a thumbnail; rename one", file=sys.stderr)
                return 1
            wanted[dest] = src

    changed = 0
    for dest, src in wanted.items():
        data = make_thumbnail(src)
        if dest.exists() and dest.read_bytes() == data:
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
        changed += 1

    removed = 0
    for old in THUMBS.rglob("*.webp") if THUMBS.exists() else []:
        if old not in wanted:
            old.unlink()
            removed += 1

    print(f"thumbnails: {len(wanted)} total, {changed} written, {removed} removed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
