﻿$(document).ready(function () {
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
        $("body").removeClass('media');
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
        espressobuzz: { text: 'EspressoBuzz', href: 'https://www.facebook.com/EspressoBuzzPhotography'},
        nattydagger: { text: 'Natália S.', href: 'https://www.instagram.com/nattydagger/'},
        adamwaz: { text: 'adam waz', href: 'http://www.adamwaz.com/'},
        hirata: { text: 'Mauricio Hirata', href: '#'},
        huang: { text: 'Andrew Huang', href: '#'},
        tiffany: { text: 'Tiffany Smith', href: 'http://www.creatiffity.me/' },
        dwight: { text: 'Dwight VanTuyl', href: 'https://github.com/breadbeard'},
        pageechols: { text: 'Ian Page-Echols', href: 'https://v8media.com'}
      };

      $(".photocredit a").attr("href", credits[credit]['href']);
      $(".photocredit a").text("Photo credit: " + credits[credit]['text']);
    };
    setPhotoCredit('huang'); // Homepage default

    var openAboutPage = function () {
      removeAll();
      $("body").addClass("about");
      setPhotoCredit('adamwaz');
    };

    var openMusicPage = function () {
      removeAll();
      $("body").addClass("music");
      setPhotoCredit('hirata');
    };
    
    var openMediaPage = function () {
      removeAll();
      $("body").addClass("media");
      setPhotoCredit('pageechols');

    // Re-trigger Instagram embeds
   setTimeout(function() {
        if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
            window.instgrm.Embeds.process(); // Process the embeds
        }
    }, 500);  // You can adjust the delay if needed
    };

    var openEventsPage = function () {
      removeAll();
      $("body").addClass("events");
      //setPhotoCredit('');
    };

    var openBookingPage = function () {
      removeAll();
      $("body").addClass("booking");
      setPhotoCredit('eschewed');
    };

    var openFundRaiserPage = function () {
      removeAll();
      $("body").addClass("fundRaiser");
      setPhotoCredit('eschewed')
    };

    var openShitShowPage = function () {
      removeAll();
      $("body").addClass("shitShow");
      setPhotoCredit('dwight')
    };

    $(".aboutMenuItem").click(openAboutPage);
    $(".musicMenuItem").click(openMusicPage);
    $(".mediaMenuItem").click(openMediaPage);
    $(".eventsMenuItem").click(openEventsPage);
    $(".fundRaiserMenuItem").click(openFundRaiserPage);
    $(".shitShowMenuItem").click(openShitShowPage);
    $(".bookingMenuItem").click(openBookingPage);
    $(".smalllogo").click(function () {
        removeAll();
        setPhotoCredit('irdeep');
    });


    var routes = {
      '/about' : openAboutPage,
      '/music' : openMusicPage,
      '/media' : openMediaPage,
      '/events' : openEventsPage,
      '/bussy' : openFundRaiserPage,
      '/contact': openBookingPage,
      '/shitshow': openShitShowPage
    };
    var router = Router(routes);
    router.init();
});
