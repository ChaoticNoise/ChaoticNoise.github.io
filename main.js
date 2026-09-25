const imageSources = [
    /* URLs to images */
];
const gallery = document.querySelector('.gallery');
imageSources.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('gallery-img');
    gallery.appendChild(img);
});



// Events come from events.json, which is generated from events.yml.
// To add a gig, edit events.yml (not this file).

function escapeHtml(text) {
    return $("<div>").text(text || "").html();
}

$(document).ready(function () {
    $.getJSON("events.json", function (events) {
        var now = new Date();

        $.each(events, function (id, event) {
            var imageUrl = event.image || "images/chaotic_logo.png";

            var eventHtml = "<div class='event'>" +
                "<div class='event-content'>" +
                    "<img src='" + escapeHtml(imageUrl) + "' class='event-image' alt='Event flier'>" +
                    "<div class='event-text'>" +
                        "<div class='eventName'><a href='" + escapeHtml(event.url) + "' target='_blank'>" + escapeHtml(event.title) + "</a></div>" +
                        "<div class='location'><a href='" + escapeHtml(event.map) + "' target='_blank'>" + escapeHtml(event.location) + "</a></div>" +
                        "<div class='time'>" + escapeHtml(event.time_display) + "</div>" +
                    "</div>" +
                "</div>" +
            "</div>";

            // Events whose start time has passed go under Past Events
            var section = new Date(event.start) < now ? "#past-events" : "#upcoming-events";
            $(section + " .eventsInfo").append(eventHtml);
        });
    });
});



// Set the current year in the copyright section

// Wait until the document is fully loaded

document.addEventListener("DOMContentLoaded", function () {
    // Set the current year
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

    // Lightbox functionality with event delegation
    const lightbox = document.getElementById("lightbox-overlay");
    const lightboxImg = lightbox.querySelector("img");

    document.body.addEventListener("click", function (e) {
        const target = e.target;

        // Check if the clicked element is an event image
        if (target.classList.contains("event-image")) {
            const src = target.src;
            if (src.includes("placeholder_event_image")) return;

            lightboxImg.src = src;
            lightbox.style.display = "flex";
        }
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });
});
