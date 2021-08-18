(function ($) {
    var defaults = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        navbar_expand: 'lg',
        animation: true,
        animateIn: 'fadeInDown',


    };
    $.fn.bootnavbar = function (options) {

        var screen_width = $(document).width();
        settings = $.extend(defaults, options);

        if (screen_width >= settings.lg) {

            /* $(this).find('.dropdown').focus(function() { use this function to see dropdowns on button click instead of  hover */
            $(this).find('.dropdown').hover(function () {
                $(this).addClass('show');
                if ($(window).width() > 960) {
                    $(this).find('.dropdown-menu').first().addClass('show');

                }
                $(this).find('.dropdown-menu').first().children().addClass('animated ' + settings.animateIn);
                if (settings.animation) {
                }
                // console.log('first');
                $(this).parent().children('.dropdown-menu').removeClass('show');

            }, function () {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').first().removeClass('show');
                // console.log('second');
                $(this).parent().children('.dropdown-menu').removeClass('show');


            });
        }
        // submenu script
        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                // console.log('third');
                if ($(window).width() < 960) {
                    // console.log('less than 960');

                    $(this).find('.dropdown-menu').first().children().addClass('animated ' + settings.animateIn);
                }

            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-menu').removeClass("show");
                // console.log('four');

            });

            return false;
        });
    };
})(jQuery);

// burger script
$('.burger').click(function () {
    $('.burger').toggleClass('show')

    var show = $('.burger').hasClass('show');
    // console.log(show);
    if (show) {
        document.body.style.overflow = "hidden";


    }
    if (!show) {

        document.body.style.overflow = "";

    }
})


// closing burger menu for selected anchor tags
$('.close-burger').click(function () {
    $('.burger').toggleClass('show')
    // console.log('clicked');
    $('.modal').removeClass('show');

})

$('.nav-item .nav-link .dropdown-toggle').click(function () {

    $('.dropdown-menu').removeClass('show')


});
$('.dropdown-toggle').click(function () {
    $(this).find('ul').removeClass('show');
});



// call function when page loads
DataAttr();

// call when window resizes
window.onresize = DataAttr;
// make it function
function DataAttr() {
    // console.log('im in function');


    if ($(window).width() >= 1000) {
        // console.log('i am big');
        $('.close-burger').removeAttr('data-toggle');


    }
    if ($(window).width() <= 1000) {
        // console.log('i am small');
        $('.close-burger').attr('data-toggle', 'collapse');


    }
}

var main_nav_menu = document.getElementsByClassName('main_nav');
// foucuson first dropdown
window.onload = function () {
    main_nav_menu[0].focus();

}
for (let i = 0; i < main_nav_menu.length; i++) {
    main_nav_menu[i].addEventListener('keydown', function (e) {
        if (e.keyCode == 39) {
            let next_menu = i + 1;
            //   console.log(next_menu);
            if (next_menu < main_nav_menu.length) {

                main_nav_menu[next_menu].focus();
            }
        }
        if (e.keyCode == 37) {
            let previous_menu = i - 1;
            if (previous_menu >= 0) {
                main_nav_menu[previous_menu].focus();
            }
        }
        if (e.keyCode == 40) {
            // console.log('I am down');
            main_nav_menu[i].parentNode.classList.add("show");
            main_nav_menu[i].nextElementSibling.classList.toggle("show")
            main_nav_menu[i].nextElementSibling.firstChild.nextElementSibling.focus();
        }
        if (e.keyCode == 32 || e.keyCode == 13) {
            // console.log('give me some space');
            main_nav_menu[i].parentNode.classList.add("show");
            main_nav_menu[i].nextElementSibling.classList.toggle("show")
            e.preventDefault();
            main_nav_menu[i].nextElementSibling.firstChild.nextElementSibling.childNodes[0].focus();
         
        }
        if (e.keyCode == 38) {
            
            $(this).parent().find('.dropdown-toggle').click();
            e.stopImmediatePropagation();
            // e.stopImmediatePropagation() is used to stop the other click handler from firing while return false is used to stop the default behaviour of following the link (as well as stopping the bubbling of the event. You may find that you need to use only e.stopPropagation).
            $(this).parent().find('.dropdown-menu:first').children().last().find('a:first').focus()
            return false;
        }
        if (e.keyCode == 27) {
            e.preventDefault()
            console.log('fsd');                    
            $(this).closest('.top_menu').find('.dropdown-menu').removeClass('show');
            
        }

    })
}

// submenu eventlisteners
var sub_menu = document.getElementsByClassName('sub-menu');
for (let i = 0; i < sub_menu.length; i++) {
    sub_menu[i].addEventListener('keydown', function (e) {

        // next menu with right arrow and tab key
        if (e.keyCode == 39) {
            // open next top menu's first submenu
            $(this).closest('.top_menu').next().find('.dropdown-menu:first').addClass('show')
            // close current submenu's
            $(this).closest('.top_menu').find('.dropdown-menu').removeClass('show')
            // focus on first anchor tag of next submenu
            $(this).closest('.top_menu').next().find('.dropdown-menu:first a:first').focus()
        }

        // previous menu with left arrow key
        if (e.keyCode == 37) {
            // open previous top menu's first submenu
            $(this).closest('.top_menu').prev().find('.dropdown-menu:first').addClass('show');
            // close current submenu's
            $(this).closest('.top_menu').find('.dropdown-menu').removeClass('show');
            // focus on first anchor tag of previous submenu
            $(this).closest('.top_menu').prev().find('.dropdown-menu:first a:first').focus();
        }

        // down arrow key
        if (e.keyCode == 40) {
            // focus on next submenu element
            $(this).parent().next().find('.dropdown-item:first').focus();
        }

        // up arrow key
        if (e.keyCode == 38) {
            e.preventDefault()
            // focus on previous element of submenu
            $(this).parent().prev().find('.dropdown-item:first').focus();
        }

        // esc key
        if(e.keyCode==27)
        {
            e.preventDefault()
            // remove active class from all dropdowns
            $(this).closest('.top_menu').find('.dropdown-menu').removeClass('show');
            $('.dropdown-menu').removeClass('show')
        }
    })
}

// open submenu dropdown
var sub_drop=document.getElementsByClassName('sub-drop');
// console.log(sub_drop);
for(let i=0;i<sub_drop.length;i++)
{
    sub_drop[i].addEventListener('keydown',function(e)
    {
        // console.log(e.keyCode);
        if(e.keyCode==13 || e.keyCode==32)
        {
            // prevent defaults
            e.preventDefault();
            // open next submenu
            $(this).next().addClass('show')
            // focus on next submenu element
            $(this).next().find('.dropdown-item:first').focus(); 
        }
        
    })
}
$('#dropdown1ul').find('li:last a:first').focus();
$('#dropdown1ul').find('li').last('a:first')

window.addEventListener('keydown',function(e)
{
    console.log(e.keyCode);
    
})