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

    var openAboutPage = function () {
      removeAll();
      $("body").addClass("about");
      setPhotoCredit('irdeep');
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
    $(".eventsMenuItem").click(openEventsPage);
    $(".fundRaiserMenuItem").click(openFundRaiserPage);
    $(".bookingMenuItem").click(openBookingPage);
    $(".smalllogo").click(function () {
        removeAll();
        setPhotoCredit('irdeep');
    });

    // Handle url anchor and open page
    var page = window.location.hash;
    if (page == "#about"){
      openAboutPage();
    }else if (page == "#music"){
      // TODO
    }else if (page == "#events"){
      openEventsPage();
    }else if (page == "#bussy"){
      openFundRaiserPage();
    }else if (page == "#contact"){
      openBookingPage();
    }
});
