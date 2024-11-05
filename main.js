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




// Separate new gigs with a comma between each

$(document).ready(function () {
    var events = [

        {
            title: "The Bad Things Vaudeville Show",
            url: "https://millerscarnation.com/event/the-bad-things-vaudeville-show/",
            location_display: "Miller's Carnation",
            location_url: "https://maps.app.goo.gl/u5J3nPrZEdc6SAga6",
            time_display: "November 8, 2024, 8:00 PM"
        }
        
    ];

    var today = new Date();

    $.each(events, function(id, event) {
        var eventDate = new Date(event.time_display); // Converts event date from string

        // Add 'past-event' class if event date is in the past
        var eventClass = eventDate < today ? "past-event" : "";

        var eventHtml = "<div class='event " + eventClass + "'>" +
            "<div class='eventName'>" +
            "<a href='" + event.url + "' target='_blank'>" + event.title + "</a>" +
            "</div>" +
            "<div class='location'>" +
            "<a href='" + event.location_url + "' target='_blank'>" + event.location_display + "</a>" +
            "</div>" +
            "<div class='time'>" + event.time_display + "</div>" +
            "</div>";
        
        $(".eventsInfo").append(eventHtml);
    });
});





// Set the current year in the copyright section

// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the copyright section
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
