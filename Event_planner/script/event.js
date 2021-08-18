var dateInput=document.getElementById('event_date');

var createBtn=document.getElementById('create');

function selectDate(date) {
    $('#calendar-wrapper').updateCalendarOptions({
      date: date
    });
    // show form
    $('.event').addClass('event-active')
    // get selected date
    ShowForm(calendar.getSelectedDate())
    // console.log(calendar.getSelectedDate().slice(0,4));
  }
  
  var defaultConfig = {
    weekDayLength: 1,
    date: new Date (),
    onClickDate: selectDate,
    showYearDropdown: true,
    startOnMonday: true,
    // disable: function (date) { 
    //   return date < new Date(); 
    // },
  };
  
  var calendar = $('#calendar-wrapper').calendar(defaultConfig);
  
//   close form
$("#close").click(function(){

    $(".event").removeClass('event-active')
    $(".event").addClass('event-hidden')
})

function ShowForm(date)
{
    var date=date.toString().slice(0,15);
    dateInput.value=date;
}

// add eventlistener to create btn
createBtn.addEventListener('click',function(){
  var event_title=document.getElementById('title').value;
var event_time=document.getElementById('time').value;
var invitee=document.getElementById('invitee').value;
var host_name=document.getElementById('host_name').value;
var host_phone=document.getElementById('host_phone').value;
var message=document.getElementById('message').value;
var date=dateInput.value;
// hide form
$('.event').removeClass('event-active')
$('.event').addClass('event-hidden')

$('.response-text').html(`Event is created Successfully for ${date}<i class="fa fa-check-circle text-success" aria-hidden="true"></i>`)
setTimeout(function(){ 
  $('.response').removeClass('d-none')
  
  // display Output
  $("#output_date").html(date)
  $("#output_title").html(event_title)
  $("#output_time").html(event_time)
  $("#output_invitee").html(invitee)
  $("#output_host").html(host_name)
  $("#output_host_phone").html(host_phone)
  $("#output_description").html(message)
}, 700);
setTimeout(function(){ 
  $('.response').addClass('d-none')
}, 2500);

  
})