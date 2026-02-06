(function ($) {
  "use strict";

  /* Preloader */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
    $(window).trigger('scroll');
  });

  /* Sticky header, back-to-top visibility, and scroll spy */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $('#back-top').fadeIn(500);
    }

    var scrollPos = $(document).scrollTop();
    $('#navigation li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.length > 0 &&
        refElement.position().top - 100 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('#navigation li').removeClass("active");
        currLink.parent().addClass("active");
      } else {
        currLink.parent().removeClass("active");
      }
    });
  });

  /* Scroll Up */
  $('#back-top a').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  /* Mobile menu */
  var menu = $('ul#navigation');
  if (menu.length) {
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: '+',
      openedSymbol: '-'
    });
  }
})(jQuery);
