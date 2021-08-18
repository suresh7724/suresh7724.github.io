// console.log('hello world');

$('#all').click(function()
{
    // console.log('clicked');
    $('#venue').removeClass('active')
    $('#event').removeClass('active')
    $('.all').removeClass('d-none')
    $('#all').addClass('active')
    
})

$("#event").click(function(){
    $('#all').removeClass('active')
    $('#venue').removeClass('active')
    $('.event').removeClass('d-none')
    $('.venue').addClass('d-none')
    $('#event').addClass('active')
})
$("#venue").click(function(){
    $('#all').removeClass('active')
    $('#event').removeClass('active')
    $('.venue').removeClass('d-none')
    $('.event').addClass('d-none')
    $('#venue').addClass('active')
})
