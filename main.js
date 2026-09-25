// Events come from events.json, which is generated from events.yml.
// To add a gig, edit events.yml (not this file).

function escapeHtml(text) {
    return $("<div>").text(text || "").html();
}

function eventHtml(event) {
    // Show the small thumbnail; the full-size flier only loads when clicked.
    var full = event.image || "images/chaotic_logo.png";
    var thumb = event.thumb || "thumbs/images/chaotic_logo.webp";

    return "<div class='event'>" +
        "<div class='event-content'>" +
            "<img src='" + escapeHtml(thumb) + "' data-full='" + escapeHtml(full) + "'" +
                " class='event-image' alt='Event flier' loading='lazy'" +
                " onerror=\"this.onerror=null; this.src=this.dataset.full;\">" +
            "<div class='event-text'>" +
                "<div class='eventName'><a href='" + escapeHtml(event.url) + "' target='_blank'>" + escapeHtml(event.title) + "</a></div>" +
                "<div class='location'><a href='" + escapeHtml(event.map) + "' target='_blank'>" + escapeHtml(event.location) + "</a></div>" +
                "<div class='time'>" + escapeHtml(event.time_display) + "</div>" +
            "</div>" +
        "</div>" +
    "</div>";
}

$(document).ready(function () {
    $.getJSON("events.json", function (events) {
        var now = new Date();
        var upcoming = [];
        var past = [];

        // events.json is in date order; events whose start time has passed go under Past Events
        $.each(events, function (i, event) {
            (new Date(event.start) < now ? past : upcoming).push(eventHtml(event));
        });

        // Upcoming: soonest first. Past: most recent first.
        $("#upcoming-events .eventsInfo").append(upcoming.join(""));
        $("#past-events .eventsInfo").append(past.reverse().join(""));
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Set the current year in the copyright section
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Toggle Past Events section
    const toggle = document.getElementById("toggle-past-events");
    const container = document.getElementById("past-events-container");
    const caret = toggle.querySelector(".caret");

    toggle.addEventListener("click", function () {
        const isVisible = container.style.display === "block";
        container.style.display = isVisible ? "none" : "block";
        caret.classList.toggle("expanded", !isVisible);
    });

    // Lightbox: clicking a flier shows the full-size image
    const lightbox = document.getElementById("lightbox-overlay");
    const lightboxImg = lightbox.querySelector("img");

    document.body.addEventListener("click", function (e) {
        const target = e.target;
        if (target.classList.contains("event-image")) {
            lightboxImg.src = target.dataset.full || target.src;
            lightbox.style.display = "flex";
        }
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });
});
