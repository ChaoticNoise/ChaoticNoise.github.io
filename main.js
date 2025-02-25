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
            title: "Book Chaotic Noise!",
            url: "http://chaoticnoise.com",
            location_display: "Seattle, WA and Surrounding Areas",
            location_url: "https://maps.app.goo.gl/4jQ9iAgeSvdH6PDu8",
            time_display: "March 10, 2025, 8:00 PM"
        },
        {
            title: "HONK! Showcase at Northwest Folklife Festival at Seattle Center!",
            url: "https://nwfolklife.org/festival/home.html",
            location_display: "Seattle Center, Seattle, WA",
            location_url: "https://maps.app.goo.gl/zo1pWFZREFasRGKC9",
            time_display: "May 25, 2025, 2:00 PM"
        },
        {
            title: "Honk! Fest West",
            url: "https://honkfestwest.org",
            location_display: "Seattle, WA",
            location_url: "https://maps.app.goo.gl/jsgyvvhs4BimrKVD8",
            time_display: "May 30, 2025, 6:00 PM"
        },
        {
            title: "Clock-Out Lounge with the Bad Things",
            url: "https://clockoutlounge.com",
            location_display: "Clock-Out Lounge",
            location_url: "https://maps.app.goo.gl/5bgBVNwpA4sqRcrx8",
            time_display: "June 14, 2025, 7:00 PM"
        },
        {
            title: "Big Brass Extravaganza #11 feat: This Much Brass, Chaotic Noise Marching Corps, VamoLá, AGAB, Analog Brass",
            url: "https://www.tixr.com/groups/nectarlounge/events/big-brass-extravaganza-11-feat-this-much-brass-chaotic-noise-marching-corps-vamol-agab-analog-brass-124702",
            location_display: "Nectar Lounge",
            location_url: "https://maps.app.goo.gl/HVsYnea9D6iVrdDz9",
            time_display: "January 16, 2025, 7:00 PM"
        },
        {
            title: "Breakfast Club",
            url: "https://www.facebook.com/share/p/15KfXeY5cn/",
            location_display: "Monkey Loft",
            location_url: "https://maps.app.goo.gl/As4qEJ64C7HnXFiT6",
            time_display: "January 1, 2025, 10:00 AM"
        },
		{
            title: "Equinox Very Open House",
            url: "https://www.facebook.com/profile.php?id=100063803760373",
            location_display: "Equinox Studios",
            location_url: "https://maps.app.goo.gl/ZA1E8ZcNFWpvpRc36",
            time_display: "December 14, 2024, 3:00 PM"
        },
        {
            title: "Port Angeles Wintertide Festival of Lights",
            url: "http://pafac.kindful.com/e/wintertide-2024",
            location_display: "Port Angeles Fine Arts Center",
            location_url: "https://maps.app.goo.gl/2rAiAaNYwRL7ZNhB8",
            time_display: "December 7, 2024, 4:00 PM"
        },
        {
            title: "Pun Slam",
            url: "https://www.eventbrite.com/e/all-stars-one-wild-card-fun-intended-punslam-comedy-wordplay-show-tickets-1045396056747?aff=erelexpmlt",
            location_display: "Capitol Hill Comedy / Bar",
            location_url: "https://maps.app.goo.gl/69YvGQpNynpnJqnTA",
            time_display: "November 27, 2024, 7:00 PM"
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
