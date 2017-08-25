$(document).ready(function () {
    $.getJSON( "http://gignado.com/v1/promotions.json?callback=?", function( events ) {
        $.each(events, function(id, event) {
            var eventHtml = "<div class='event'>" +
                "<div class='eventName'>" +
                "<a href='" + event.url + "'>" + event.title + "</a>" +
                "</div>" +
                "<div class='location'>" +
                "<a href='" + event.location_url + "'>" + event.location_display + "</a>" +
                "</div>" +
                "<div class='time'>" + event.time_display + "</div>" +
                "</div>";
            $(".eventsInfo").append(eventHtml);
        });
    });
});