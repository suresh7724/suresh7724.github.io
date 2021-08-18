$(document).ready(function()
{
    $('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
autoplay:true,
items:1,
autoHeight:true,

})
var scroll_start = 0;
var startchange = $('#navbar');
var offset = startchange.offset();
$(document).scroll(function() { 
scroll_start = $(this).scrollTop();
if(scroll_start > 100) {
  $('#navbar').css('background-color', '#fff');
  $('#navbar .nav-item a').css('color', '#000');
} else {
  $('#navbar').css('background-color', 'transparent');
  $('#navbar .nav-item a').css('color', '#fff');
}
});


$('.burger').click(function(){
$(this).toggleClass('active')
$('.nav-list').toggleClass('nav-show')
})

})
