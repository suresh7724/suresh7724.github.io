var send=document.getElementById('submit');
send.addEventListener('click', function(){
    var name=document.getElementById('name').value
    var email=document.getElementById('mail').value
    var subject=document.getElementById('subject').value
    var message=document.getElementById('message').value

    Email.send({
        Host : "smtp.gmail.com",
        Username : "testersuresh5@gmail.com",
        Password : "Suresh098",
        To : 'testersuresh5@gmail.com',
        From : "testersuresh5@gmail.com",
        Subject : `${name} sent you a message`,
        Body : `Name=${name}
        <br>
        Email= ${email}
        <br>
        ${message}
        `
    }).then(
      message => alert('Thanks for contacting Us we will get back to you soon')
    );
    
})
