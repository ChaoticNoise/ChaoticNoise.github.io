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
        $("body").removeClass('fundRaiser');

        $("body").removeClass("showSmallMenu");
        window.scrollTo(0,0);
    };

    var setPhotoCredit = function (credit) {
      credits = {
        eschewed: { text: 'eschewed', href: 'https://www.instagram.com/eschewed/'},
        irdeep: { text: 'IRDEEP', href: 'http://irdeep.com/' },
        espressobuzz: { text: 'EspressoBuzz', href: 'https://www.facebook.com/EspressoBuzzPhotography'}
      };

      $(".photocredit a").attr("href", credits[credit]['href']);
      $(".photocredit a").text("Photo credit: " + credits[credit]['text']);
    };

    $(".aboutMenuItem").click(function () {
        removeAll();
        $("body").addClass("about");
        setPhotoCredit('irdeep');
    });
    $(".eventsMenuItem").click(function () {
        removeAll();
        $("body").addClass("events");
        setPhotoCredit('espressobuzz');
    });
    $(".bookingMenuItem").click(function () {
        removeAll();
        $("body").addClass("booking");
        setPhotoCredit('irdeep');
    });
    $(".fundRaiserMenuItem").click(function () {
        removeAll();
        $("body").addClass("fundRaiser");
        setPhotoCredit('eschewed')
    });
    $(".smalllogo").click(function () {
        removeAll();
        setPhotoCredit('irdeep');
    });
});
