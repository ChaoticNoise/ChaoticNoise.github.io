$(document).ready(function () {
    $(".hamburger").click(function () {
        if ($("body").hasClass("showSmallMenu")) {
            $("body").removeClass("showSmallMenu");
        } else {
            $("body").addClass("showSmallMenu");
        }
    });
    var removeAll = function () {
        $("body").removeClass('about');
        $("body").removeClass('events');
        $("body").removeClass('booking');
        $("body").removeClass('fund');

        $("body").removeClass("showSmallMenu");
        window.scrollTo(0,0);
    }
    $(".aboutMenuItem").click(function () {
        removeAll();
        $("body").addClass("about");
    });
    $(".eventsMenuItem").click(function () {
        removeAll();
        $("body").addClass("events");
    });
    $(".bookingMenuItem").click(function () {
        removeAll();
        $("body").addClass("booking");
    });
    $(".smalllogo").click(function () {
        removeAll();
    });
});
