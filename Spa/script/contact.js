var send_btn=document.getElementById('send');
send_btn.addEventListener('click', function(){
    var name=document.getElementById('name').value
    var mail=document.getElementById('mail').value
    var message=document.getElementById('message').value
    
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ltb.fushimi@gmail.com",
        Password : "harewatarau",
        To : 'ltb.fushimi@gmail.com',
        From : "ltb.fushimi@gmail.com",
        Subject : `${name}  want to enquire  something about`,
        Body : `${message}`
    }).then(
      message => alert("Thanks For Reaching with us. We will get  back to you soon. ")
    );
})
