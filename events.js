$(document).ready(function () {
    // Define an array of event objects manually
    var events = [
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
        // Add more events here as needed
    ];

    // Loop through the events array and generate HTML for each event
    $.each(events, function(id, event) {
        var eventHtml = "<div class='event'>" +
            "<div class='eventName'>" +
            "<a href='" + event.url + "' target='_blank'>" + event.title + "</a>" +
            "</div>" +
            "<div class='location'>" +
            "<a href='" + event.location_url + "' target='_blank'>" + event.location_display + "</a>" +
            "</div>" +
            "<div class='time'>" + event.time_display + "</div>" +
            "</div>";
        // Append the event to the eventsInfo section
        $(".eventsInfo").append(eventHtml);
    });
});