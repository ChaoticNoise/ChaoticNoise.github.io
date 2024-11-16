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
            title: "Equinox Very Open House",
            url: "https://www.facebook.com/profile.php?id=100063803760373",
            location_display: "Equinox Studios",
            location_url: "https://maps.app.goo.gl/ZA1E8ZcNFWpvpRc36",
            time_display: "December 14, 2024, 3:00 PM"
        },
		{
            title: "The Bad Things Vaudeville Show",
            url: "https://millerscarnation.com/event/the-bad-things-vaudeville-show/",
            location_display: "Miller's Carnation",
            location_url: "https://maps.app.goo.gl/u5J3nPrZEdc6SAga6",
            time_display: "November 8, 2024, 8:00 PM"
        },
        {
            title: "Georgetown Halloween Parade & Marauding",
            url: "https://www.georgetowncommunitycouncil.com/post/spooky-parade-to-haunt-georgetown-on-halloween",
            location_display: "Georgetown, Seattle, WA",
            location_url: "https://maps.google.com/?q=6525%20Ellis%20Ave%20S",
            time_display: "October 31, 2024, 6:30 PM"
        },
        {
            title: "Boulderfest competition",
            url: "https://boulderingproject.com/seattle-boulderfest2024/",
            location_display: "Seattle Bouldering Project",
            location_url: "https://maps.google.com/?q=900%20Poplar%20Pl%20S%20Seattle,%20WA%2098144",
            time_display: "October 12, 2024, 6:00 PM"
        },
        {
            title: "The LAST EVER Hoodstock",
            url: "https://www.instagram.com/hotlegsdorsey/p/DA1pi_ezsmU/",
            location_display: "MLK, Seattle, WA",
            location_url: "https://maps.google.com/?q=918%20Martin%20Luther%20King%20Jr%20Way",
            time_display: "October 12, 2024, 3:30 PM"
        },
        {
            title: "Great Pumpkin Beer Fest 2024",
            url: "https://www.elysianbrewing.com/gpbf2024",
            location_display: "Seattle Center",
            location_url: "https://maps.google.com/?q=Seattle%20Center",
            time_display: "October 05, 2024, 7:40 PM"
        },
        {
            title: "Wally's House of Booze",
            url: "https://www.instagram.com/explore/locations/461700087651361/wallys-house-of-booze/",
            location_display: "Miller's Carnation",
            location_url: "https://maps.app.goo.gl/EGMf7qbZAK9Nem1r9",
            time_display: "August 30, 2024, 11:00 PM"
        }
        
    ];

    var today = new Date();

    // Loop through each event and sort them into upcoming or past
    $.each(events, function (id, event) {
        var eventDate = new Date(event.time_display); // Convert event date from string

        // Check if event is in the past
        if (eventDate < today) {
            // Past event
            var eventHtml = "<div class='event past-event'>" +
                "<div class='eventName'>" +
                "<a href='" + event.url + "' target='_blank'>" + event.title + "</a>" +
                "</div>" +
                "<div class='location'>" +
                "<a href='" + event.location_url + "' target='_blank'>" + event.location_display + "</a>" +
                "</div>" +
                "<div class='time'>" + event.time_display + "</div>" +
                "</div>";

            // Append to past events section
            $("#past-events .eventsInfo").append(eventHtml);
        } else {
            // Upcoming event
            var eventHtml = "<div class='event'>" +
                "<div class='eventName'>" +
                "<a href='" + event.url + "' target='_blank'>" + event.title + "</a>" +
                "</div>" +
                "<div class='location'>" +
                "<a href='" + event.location_url + "' target='_blank'>" + event.location_display + "</a>" +
                "</div>" +
                "<div class='time'>" + event.time_display + "</div>" +
                "</div>";

            // Append to upcoming events section
            $("#upcoming-events .eventsInfo").append(eventHtml);
        }
    });
});





// Set the current year in the copyright section

// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the copyright section
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
