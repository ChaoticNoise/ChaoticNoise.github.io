// Chaotic Noise homepage behavior.
// Events come from events.json, which is generated from events.yml.
// To add a gig, edit events.yml (not this file).

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function link(href, text) {
  const a = el("a", null, text);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}

// Read the date straight from the event's local time ("2026-10-03T12:00:00-07:00")
// so it shows the same day no matter where the visitor is.
function dateParts(start) {
  const [y, m, d] = start.slice(0, 10).split("-").map(Number);
  const [hh, mm] = start.slice(11, 16).split(":").map(Number);
  const hour12 = hh % 12 || 12;
  return {
    month: MONTHS[m - 1],
    day: d,
    year: y,
    weekday: WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()],
    time: `${hour12}:${String(mm).padStart(2, "0")} ${hh < 12 ? "AM" : "PM"}`,
  };
}

function eventCard(event) {
  const when = dateParts(event.start);
  const card = el("article", "event");

  const badge = el("div", "date-badge");
  badge.append(el("span", "month", when.month), el("span", "day", String(when.day)), el("span", "weekday", when.weekday));

  // Small thumbnail; the full-size flier only loads when clicked
  const flier = el("img", "event-flier");
  flier.src = event.thumb || "thumbs/images/chaotic_logo.webp";
  flier.dataset.full = event.image || "images/chaotic_logo.png";
  flier.alt = `Flier for ${event.title}`;
  flier.loading = "lazy";
  flier.onerror = () => { flier.onerror = null; flier.src = flier.dataset.full; };

  const info = el("div", "event-info");
  const title = el("h3", "event-title");
  title.append(link(event.url, event.title));
  const where = el("div", "event-where");
  where.append(event.map ? link(event.map, event.location) : document.createTextNode(event.location));
  info.append(title, where, el("div", "event-when", `${when.weekday}, ${when.month} ${when.day}, ${when.year} · ${when.time}`));

  card.append(badge, flier, info);
  return card;
}

function setUpEvents(events) {
  const now = new Date();
  const upcoming = events.filter(e => new Date(e.start) >= now);
  const past = events.filter(e => new Date(e.start) < now).reverse(); // most recent first

  const upcomingList = document.getElementById("upcoming-events");
  upcoming.forEach(e => upcomingList.append(eventCard(e)));
  document.getElementById("no-upcoming").hidden = upcoming.length > 0;

  // "Next show" banner at the top of the page
  if (upcoming.length) {
    const next = upcoming[0];
    const when = dateParts(next.start);
    const banner = document.getElementById("next-up");
    banner.querySelector(".next-up-text").textContent =
      `${next.title} · ${when.weekday}, ${when.month} ${when.day} · ${next.location}`;
    banner.hidden = false;
  }

  // Past shows are only built (and their fliers loaded) when someone opens them
  const toggle = document.getElementById("past-toggle");
  const pastList = document.getElementById("past-events");
  if (past.length) {
    toggle.querySelector(".count").textContent = `(${past.length})`;
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      if (!pastList.childElementCount) past.forEach(e => pastList.append(eventCard(e)));
      const open = pastList.hidden;
      pastList.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.firstChild.textContent = open ? "Hide past shows " : "Show past shows ";
    });
  }
}

function setUpNav() {
  const nav = document.getElementById("nav");
  const button = nav.querySelector(".nav-toggle");
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }));

  // Highlight the nav link for the section in the middle of the screen
  const links = new Map([...nav.querySelectorAll('.nav-links a[href^="#"]')].map(a => [a.getAttribute("href").slice(1), a]));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.remove("active"));
      const current = links.get(entry.target.id);
      if (current && !current.classList.contains("nav-cta")) current.classList.add("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach(section => observer.observe(section));
}

function setUpLightbox() {
  const lightbox = document.getElementById("lightbox-overlay");
  const img = lightbox.querySelector("img");
  document.addEventListener("click", e => {
    if (e.target.classList.contains("event-flier")) {
      img.src = e.target.dataset.full;
      lightbox.hidden = false;
    }
  });
  lightbox.addEventListener("click", () => {
    lightbox.hidden = true;
    img.src = "";
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") lightbox.hidden = true;
  });
}

// Videos show a thumbnail; the YouTube player only loads (and starts) when tapped
function setUpVideos() {
  document.querySelectorAll(".yt").forEach(thumb => {
    thumb.addEventListener("click", e => {
      e.preventDefault();
      const player = document.createElement("iframe");
      player.src = `https://www.youtube.com/embed/${thumb.dataset.id}?autoplay=1&rel=0`;
      player.title = thumb.querySelector(".yt-title").textContent;
      player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      player.allowFullscreen = true;
      thumb.replaceWith(player);
    });
  });
}

document.getElementById("current-year").textContent = new Date().getFullYear();
setUpNav();
setUpVideos();
setUpLightbox();
fetch("events.json")
  .then(response => response.json())
  .then(setUpEvents)
  .catch(() => { document.getElementById("no-upcoming").hidden = false; });
