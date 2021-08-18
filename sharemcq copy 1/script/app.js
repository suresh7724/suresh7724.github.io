// navbar script
// console.log('attached');

var scrollp=0;
    (function ($) {
        $(document).ready(function(){
            $(function () {
                $(window).scroll(function () {
                // ask about the position of scroll 

                    if ($(this).scrollTop() < scrollp) {
                        $('.navbar').fadeIn();
                        scrollp= $(this).scrollTop();
                    } else {
                        $('.navbar').fadeOut();
                        scrollp= $(this).scrollTop();
                    }
                });
            });

        });
    }(jQuery));

//report script
    $(document).ready(function(){
        $(".report-c").click(function(){
          $("#report-modal").modal('show');
          console.log('clicked');
          
        });
      });

    //   like script
      jQuery('.like').click(function() {
        $(this).toggleClass('liked');
        // console.log('working');
        
      });
    //   favourite script
     jQuery('.fav').click(function() {
        $(this).toggleClass('fav-click');
        // console.log('working');
        
      });

    //    script for show ans
      jQuery('.check-ans').click(function() {
        $(this).find('a:first').toggleClass('hide');
        $(this).children().eq(1).toggleClass('show-ans');
        // $(this).children('a:nth-child(1)').toggleClass('id');
        // console.log('working');
        
      });

      // nav transparent
      // $(window).scroll(function() {
      //   if ($(document).scrollTop() < 450) {
      //     $('header').removeClass('transparent');
      //     $('#nav-cont').removeClass('transparent');
      //   } else {
      //     $('header').addClass('transparent');
      //     $('#nav-cont').addClass('transparent');
         
      //   }
      // });

    //  search bar
    $(document).ready(function(){
      $("#search").focus(function() {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
      });
      $("#search").blur(function() {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
      });
      $("#search").keyup(function() {
          if($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
          }
          else {
            $(".go-icon").removeClass("go-in");
          }
      });
      $(".go-icon").click(function(){
        $(".search-form").submit();
      });
  });
  


  // correct option identifier



  

      