$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items:1,
            autoHeight:true,
            loop:true,
            autoplay:true,
            // autoplayTimeout:3000,
            nav:true,
            dots:true,

        }
    );
    AOS.init();
    
  });
  (function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        dots: true,
        nav:true,
        responsive: {
          0: {
            items: 1,
          },
          680: {
            items: 2,
          },
          1000: {
            items: 3,
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  $(document).ready(function () {
    $('.pogoSlider').pogoSlider({
      autoplayTimeout: 4000,
      autoplay: true,
      baseZindex: 1,
      displayProgess: true,
      onSlideStart: null,
      onSlideEnd: null,
      onSliderPause: null,
      onSliderResume: null,
      slideTransition: 'slide',
      slideTransitionDuration: 1000,
      elementTransitionStart: 500,
      elementTransitionDuration: 1000,
      elementTransitionIn: 'slideUp',
      elementTransitionOut: 'slideDown',
      generateButtons: true,
      buttonPosition: 'CenterHorizontal',
      generateNav: true,
      navPosition: 'Bottom',
      preserveTargetSize: false,
      targetWidth: 1000,
      targetHeight: 500,
      responsive: true,
    }).data('plugin_pogoSlider');
    }); 