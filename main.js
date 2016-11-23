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
        $("body").removeClass('music');
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
        espressobuzz: { text: 'EspressoBuzz', href: 'https://www.facebook.com/EspressoBuzzPhotography'},
        nattydagger: { text: 'Natália S.', href: 'https://www.instagram.com/nattydagger/'}
      };

      $(".photocredit a").attr("href", credits[credit]['href']);
      $(".photocredit a").text("Photo credit: " + credits[credit]['text']);
    };

    var openAboutPage = function () {
      removeAll();
      $("body").addClass("about");
      setPhotoCredit('irdeep');
    };

    var openMusicPage = function () {
      removeAll();
      $("body").addClass("music");
      setPhotoCredit('nattydagger');
    };

    var openEventsPage = function () {
      removeAll();
      $("body").addClass("events");
      setPhotoCredit('espressobuzz');
    };

    var openBookingPage = function () {
      removeAll();
      $("body").addClass("booking");
      setPhotoCredit('irdeep');
    };

    var openFundRaiserPage = function () {
      removeAll();
      $("body").addClass("fundRaiser");
      setPhotoCredit('eschewed')
    };

    $(".aboutMenuItem").click(openAboutPage);
    $(".musicMenuItem").click(openMusicPage);
    $(".eventsMenuItem").click(openEventsPage);
    $(".fundRaiserMenuItem").click(openFundRaiserPage);
    $(".bookingMenuItem").click(openBookingPage);
    $(".smalllogo").click(function () {
        removeAll();
        setPhotoCredit('irdeep');
    });


    var routes = {
      '/about' : openAboutPage,
      '/music' : openMusicPage,
      '/events' : openEventsPage,
      '/bussy' : openFundRaiserPage,
      '/contact' : openBookingPage
    };
    var router = Router(routes);
    router.init();
});
