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

title: "Wally's House of Booze",
url: "https://www.instagram.com/explore/locations/461700087651361/wallys-house-of-booze/",
location_display: "Wally's Tavern",
location_url: "https://maps.app.goo.gl/EGMf7qbZAK9Nem1r9",
time_display: "August 30, 2024, 11:00 PM"

},{

title: "Great Pumpkin Beer Fest 2024",
url: "https://www.elysianbrewing.com/gpbf2024",
location_display: "Seattle Center",
location_url: "https://maps.google.com/?q=Seattle%20Center",
time_display: "October 05, 2024, 7:40 PM",
image: "http://chaoticnoise.com/event_fliers/elysian-pumpkin-fest-2024.jpg"

},{

title: "The LAST EVER Hoodstock",
url: "https://www.instagram.com/hotlegsdorsey/p/DA1pi_ezsmU/",
location_display: "MLK, Seattle, WA",
location_url: "https://maps.google.com/?q=918%20Martin%20Luther%20King%20Jr%20Way",
time_display: "October 12, 2024, 3:30 PM",
image: "http://chaoticnoise.com/event_fliers/20241012_Hoodstock.jpg"

},{

title: "Boulderfest competition",
url: "https://boulderingproject.com/seattle-boulderfest2024/",
location_display: "Seattle Bouldering Project",
location_url: "https://maps.google.com/?q=900%20Poplar%20Pl%20S%20Seattle,%20WA%2098144",
time_display: "October 12, 2024, 6:00 PM",
image: "http://chaoticnoise.com/event_fliers/20241012_Boulderfest.jpg"

},{

title: "Georgetown Halloween Parade & Marauding",
url: "https://www.georgetowncommunitycouncil.com/post/spooky-parade-to-haunt-georgetown-on-halloween",
location_display: "Georgetown, Seattle, WA",
location_url: "https://maps.google.com/?q=6525%20Ellis%20Ave%20S",
time_display: "October 31, 2024, 6:30 PM",
image: "http://chaoticnoise.com/event_fliers/20241013_Georgetown_Halloween_Parade.jpg"

},{

title: "The Bad Things Vaudeville Show",
url: "https://millerscarnation.com/event/the-bad-things-vaudeville-show/",
location_display: "Miller's Carnation",
location_url: "https://maps.app.goo.gl/u5J3nPrZEdc6SAga6",
time_display: "November 8, 2024, 8:00 PM",
image: "http://chaoticnoise.com/event_fliers/20241108_Bad_Things_Vaudeville_Show.jpg"

},{

title: "Pun Slam",
url: "https://www.eventbrite.com/e/all-stars-one-wild-card-fun-intended-punslam-comedy-wordplay-show-tickets-1045396056747?aff=erelexpmlt",
location_display: "Capitol Hill Comedy / Bar",
location_url: "https://maps.app.goo.gl/69YvGQpNynpnJqnTA",
time_display: "November 27, 2024, 7:00 PM",
image: "http://chaoticnoise.com/event_fliers/20241127_Pun_Slam.jpg"

},{

title: "Port Angeles Wintertide Festival of Lights",
url: "http://pafac.kindful.com/e/wintertide-2024",
location_display: "Port Angeles Fine Arts Center",
location_url: "https://maps.app.goo.gl/2rAiAaNYwRL7ZNhB8",
time_display: "December 7, 2024, 4:00 PM"

},{

title: "Equinox Very Open House",
url: "https://www.facebook.com/profile.php?id=100063803760373",
location_display: "Equinox Studios",
location_url: "https://maps.app.goo.gl/ZA1E8ZcNFWpvpRc36",
time_display: "December 14, 2024, 3:00 PM",
image: "http://chaoticnoise.com/event_fliers/20241214_Equinox_Open_House.jpg"

},{

title: "Breakfast Club",
url: "https://www.facebook.com/share/p/15KfXeY5cn/",
location_display: "Monkey Loft",
location_url: "https://maps.app.goo.gl/As4qEJ64C7HnXFiT6",
time_display: "January 1, 2025, 10:00 AM"

},{

title: "Big Brass Extravaganza #11 feat: This Much Brass, Chaotic Noise Marching Corps, VamoLá, AGAB, Analog Brass",
url: "https://www.tixr.com/groups/nectarlounge/events/big-brass-extravaganza-11-feat-this-much-brass-chaotic-noise-marching-corps-vamol-agab-analog-brass-124702",
location_display: "Nectar Lounge",
location_url: "https://maps.app.goo.gl/HVsYnea9D6iVrdDz9",
time_display: "January 16, 2025, 7:00 PM",
image: "http://chaoticnoise.com/event_fliers/20250116_Big_Brass_Extravaganza_promo.jpg"

},{

title: "Goodbye Lucille House",
url: "https://www.seattle.gov/dpd/AppDocs/GroupMeetings/DRProposal3039114AgendaID15528.pdf",
location_display: "Lucille House",
location_url: "https://maps.app.goo.gl/cJUBW4vvp5N1VHKm9",
time_display: "April 11, 2025, 6:30 PM"

},{

title: "University District Street Fair",
url: "https://udistrictseattle.com/streetfair",
location_display: "University District",
location_url: "https://maps.app.goo.gl/ffyJQFUAttbPiRmNA",
time_display: "May 17, 2025, 1:30 PM"

},{

title: "HONK! Showcase at Northwest Folklife Festival at Seattle Center! (4 Bands! Neon Brass Party, Filthy Femcorps, Chaotic Noise, and This Much Brass)",
url: "https://nwfolklife.org/festival/home.html",
location_display: "Seattle Center, Seattle, WA",
location_url: "https://maps.app.goo.gl/zo1pWFZREFasRGKC9",
time_display: "May 25, 2025, 1:15 PM"

},{

title: "Honk! Fest West 6-10pm - Chaotic Noise Plays at the Underpass Stage at 8pm",
url: "https://honkfestwest.org",
location_display: "Georgetown in Seattle, WA",
location_url: "http://maps.google.com/?q=Georgetown",
time_display: "May 30, 2025, 8:00 PM"

},{

title: "Honk! Fest West 12-8pm - Chaotic Noise Plays at the North Park Stage in Columbia City at 3pm",
url: "https://honkfestwest.org",
location_display: "Columbia Park in Seattle, WA",
location_url: "https://maps.app.goo.gl/qJRdfP68mqwphpQf6",
time_display: "May 31, 2025, 3:00 PM"

},{

title: "Honk! Fest West 12-8pm - Chaotic Noise Plays at the South Park Stage in Columbia City at 7pm",
url: "https://honkfestwest.org",
location_display: "Columbia Park in Seattle, WA",
location_url: "https://maps.app.goo.gl/qJRdfP68mqwphpQf6",
time_display: "May 31, 2025, 7:00 PM"

},{

title: "Honk! Fest West 12-6:30pm - Chaotic Noise Plays at the South Field Stage in Pratt Park at 4:30pm",
url: "https://honkfestwest.org",
location_display: "Pratt Park in Seattle, WA",
location_url: "https://maps.app.goo.gl/HFvStXRwm8soYQJD7",
time_display: "June 1, 2025, 4:30 PM"

},{

title: "Georgetown Carnival",
url: "https://georgetownseattle.org/georgetown-carnival-2025/",
location_display: "Georgetown, Seattle, WA",
location_url: "https://maps.app.goo.gl/RVrS9C7Aeb4AtgxY9",
time_display: "June 14, 2025, 12:00 PM",
image: "http://chaoticnoise.com/event_fliers/GT-Carnival-2025-Postcard-Front-683x1024.jpg"

},{

title: "The Bad Things Vaudeville Show, Feat: The Bad Things, Chaotic Noise Marching Corps, Blackhearts Society, Leslie Rosen, J9 Fierce",
url: "https://clockoutlounge.com",
location_display: "Clock-Out Lounge",
location_url: "https://maps.app.goo.gl/5bgBVNwpA4sqRcrx8",
time_display: "June 14, 2025, 8:00 PM",
image: "http://chaoticnoise.com/event_fliers/20250614_The_Bad_Things_Vaudeville_Show.jpg"

},{

title: "Death by Brass at The High Water Mark with Brassless Chaps, Couch Brass, and Chaotic Noise Marching Corps",
url: "https://maps.app.goo.gl/AP9kQP8VkCbQmKfE9",
location_display: "The High Water Mark",
location_url: "https://maps.app.goo.gl/AP9kQP8VkCbQmKfE9",
time_display: "June 19, 2025, 8:30 PM",
image: "http://chaoticnoise.com/event_fliers/20250619_Death_by_Brass_with_Brassless_Chaps,_Couch_Brass,_and_Chaotic_Noise_at_The_High_Water_Mark_in_Portland.jpg"

},{

title: "Equinox Very Open House",
url: "https://www.instagram.com/p/DLiiOgJB5-E/?hl=en",
location_display: "Equinox Studios",
location_url: "https://maps.app.goo.gl/WduHy3G4Sszd141g7",
time_display: "August 09, 2025, 6:00 PM",
image: "http://chaoticnoise.com/event_fliers/20250809_Equinox_Open_House.jpg"

},{

title: "Miller's Carnation with the Bad Things",
url: "https://www.instagram.com/millerscarnation/",
location_display: "Miller's Carnation",
location_url: "https://maps.app.goo.gl/anFTVTWjN1QLY6Lg7",
time_display: "September 06, 2025, 7:30 PM"

},{

title: "Mardi Gras in New Orleans",
url: "https://www.mardigrasneworleans.com",
location_display: "New Orleans",
location_url: "http://maps.google.com/?q=New%20Orleans",
time_display: "February 13, 2026, 12:00 PM"

}
        
    ];

    var today = new Date();

    // Loop through each event and sort them into upcoming or past
    $.each(events, function (id, event) {
        var eventDate = new Date(event.time_display); // Convert event date from string

        // Check if event is in the past
        if (eventDate < today) {
// Past event

var imageUrl = event.image || "http://chaoticnoise.com/images/chaotic_logo.png";

var eventHtml = "<div class='event'>" +
    "<div class='event-content'>" +
        "<img src='" + imageUrl + "' class='event-image' alt='Event flier'>" +
        "<div class='event-text'>" +
            "<div class='eventName'><a href='" + event.url + "' target='_blank'>" + event.title + "</a></div>" +
            "<div class='location'><a href='" + event.location_url + "' target='_blank'>" + event.location_display + "</a></div>" +
            "<div class='time'>" + event.time_display + "</div>" +
        "</div>" +
    "</div>" +
"</div>";


// Append to past events section
$("#past-events .eventsInfo").append(eventHtml);
        } else {
// Upcoming event

var imageUrl = event.image || "http://chaoticnoise.com/images/chaotic_logo.png";

var eventHtml = "<div class='event'>" +
    "<div class='event-content'>" +
        "<img src='" + imageUrl + "' class='event-image' alt='Event flier'>" +
        "<div class='event-text'>" +
            "<div class='eventName'><a href='" + event.url + "' target='_blank'>" + event.title + "</a></div>" +
            "<div class='location'><a href='" + event.location_url + "' target='_blank'>" + event.location_display + "</a></div>" +
            "<div class='time'>" + event.time_display + "</div>" +
        "</div>" +
    "</div>" +
"</div>";


// Append to upcoming events section
$("#upcoming-events .eventsInfo").append(eventHtml);
        }
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
