var events = [
    {
        name: "Seattle Tattoo Expo",
        url: "http://www.seattletattooexpo.com/",
        location: "Seattle Center",
        locationUrl: "https://www.google.com/maps/place/Seattle+Center/@47.6222833,-122.3543633,17z/data=!3m1!4b1!4m5!3m4!1s0x54901545d5e902b1:0x809dba0423e59752!8m2!3d47.6222833!4d-122.3521746",
        datetime: "Saturday Aug 19 3:15PM"
    },
    {
        name: "Seattle Tattoo Expo",
        url: "http://www.seattletattooexpo.com/",
        location: "Seattle Center",
        locationUrl: "https://www.google.com/maps/place/Seattle+Center/@47.6222833,-122.3543633,17z/data=!3m1!4b1!4m5!3m4!1s0x54901545d5e902b1:0x809dba0423e59752!8m2!3d47.6222833!4d-122.3521746",
        datetime: "Saturday Aug 20 2:15PM"
    },
    {
        name: "Big Brass Extravaganza",
        url: "https://www.eventbrite.com/e/big-brass-extravaganza-tickets-35441632878?aff=efbeventtix",
        location: "Nectar Lounge",
        locationUrl: "https://www.google.com/maps/place/Nectar+Lounge/@47.6523697,-122.3538481,15z/data=!4m5!3m4!1s0x0:0x1bb397aef920198e!8m2!3d47.6523697!4d-122.3538481",
        datetime: "Thursday Aug 24 8PM"
    },
    {
        name: "Duwamish River Clean Up Community Event",
        url: "http://duwamishcleanup.org/event/11th-annual-duwamish-river-festival-2017/",
        location: "Duwamish Waterfront Park 7900 10th Ave. S, Seattle, WA 98108",
        locationUrl: "http://maps.google.com/?q=Duwamish+Waterfront+Park+7900+10th+Ave.+S,+Seattle,+WA+98108",
        datetime: "Saturday Aug 26 5:40PM"
    }
];

$(document).ready(function () {
    var l = events.length;
    for (var i = 0; i < l; i++) {
        var event = "<div class='event'>" +
                        "<div class='eventName'>" +
                        "<a href='" + events[i].url + "'>" + events[i].name + "</a>" +
                        "</div>" +
                        "<div class='location'>" +
                        "<a href='" + events[i].locationUrl + "'>" + events[i].location + "</a>" +
                        "</div>" +
                        "<div class='time'>" + events[i].datetime + "</div>" +
                    "</div>"
        $(".eventsInfo").append(event);
    }
});