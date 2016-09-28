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
        $("body").removeClass('shitShow');

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

    var openMusicPage = function () {
      removeAll();
      $("body").addClass("music");
      setPhotoCredit('eschewed');
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

    var openShitShowPage = function () {
      removeAll();
      $("body").addClass("shitShow");
      setPhotoCredit('eschewed')
    }

    $(".aboutMenuItem").click(openAboutPage);
    $(".musicMenuItem").click(openMusicPage);
    $(".eventsMenuItem").click(openEventsPage);
    $(".fundRaiserMenuItem").click(openFundRaiserPage);
    $(".shitShowMenuItem").click(openShitShowPage);
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
      openMusicPage();
    }else if (page == "#events"){
      openEventsPage();
    }else if (page == "#bussy"){
      openFundRaiserPage();
    }else if (page == "#shitshow"){
      openShitShowPage();
    }else if (page == "#contact"){
      openBookingPage();
    }
});
