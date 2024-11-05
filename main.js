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





$(document).ready(function () {
    var events = [
        {
            title: "Equinox Studios Open House",
            url: "https://www.instagram.com/equinoxstudiosseattle",
            location_display: "Equinox Studios Seattle",
            location_url: "http://maps.google.com/?q=6555%205th%20Ave%20S,%20Seattle,%20WA%2098108",
            time_display: "August 10, 2024, 6:00 PM"
        },
        {
            title: "Wally's House of Booze",
            url: "https://www.instagram.com/explore/locations/461700087651361/wallys-house-of-booze/",
            location_display: "Wenatchee",
            location_url: "https://maps.app.goo.gl/EGMf7qbZAK9Nem1r9",
            time_display: "August 30, 2024, 11:00 PM"
        },
        {
            title: "Tacoma HONK! Fest",
            url: "https://tacomahonk.org",
            location_display: "Tacoma's McKinley Hill neighborhood",
            location_url: "https://maps.app.goo.gl/3xx3wi3fZoiTg96M7",
            time_display: "September 14, 2024, 3:00 PM"
        },
        {
            title: "Port Townsend Film Festival",
            url: "https://ptfilm.org",
            location_display: "Port Townsend",
            location_url: "http://maps.google.com/?q=Port%20Townsend",
            time_display: "September 20, 2024, 5:15 PM"
        },
        {
            title: "Great Pumpkin Beer Fest 2024",
            url: "https://www.elysianbrewing.com/gpbf2024",
            location_display: "Seattle Center",
            location_url: "http://maps.google.com/?q=Seattle%20Center",
            time_display: "October 04, 2024, 7:40 PM"
        },
        {
            title: "The LAST EVER Hoodstock",
            url: "https://www.facebook.com/events/seattle-wa-98122/last-hoodstock-15-there-goes-the-neighbor-hoodstock/1690760358132069/",
            location_display: "MLK in Seattle",
            location_url: "http://maps.google.com/?q=918%20Martin%20Luther%20King%20Jr%20Way",
            time_display: "October 12, 2024, 3:30 PM"
        },
        {
            title: "Boulderfest (Seattle Bouldering Project competition)",
            url: "https://boulderingproject.com/market/seattle-washington/",
            location_display: "Seattle Bouldering Project",
            location_url: "http://maps.google.com/?q=900%20Poplar%20Pl%20S%20Seattle,%20WA%2098144",
            time_display: "October 12, 2024, 6:00 PM"
        },
        {
            title: "Georgetown Halloween Parade (& Marauding)",
            url: "https://www.georgetown-arts-culture.org",
            location_display: "Georgetown",
            location_url: "https://maps.app.goo.gl/mH9woGqZ1tRkEyMd7",
            time_display: "October 31, 2024, 6:00 PM"
        },
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
