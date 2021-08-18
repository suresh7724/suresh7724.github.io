var button=document.getElementById('check');
var result= document.getElementById('result');
button.addEventListener('click', show)

function show ()
{
    // get user input
    var user_input=document.getElementById('user_input');
    // console.log(user_input.value);

    // check if user input is valid
    if(user_input.value=="null" || user_input.value=="")
    {
        result.innerHTML=`<div class="alert alert-danger" role="alert">
        Please enter valid input
        </div>`;
        console.log('in function');    
        return
    }

    // clear warning innerhtml
    result.innerHTML="";
    // convert user input in string
   let  user_value=parseInt(user_input.value);
    if(user_value %3 == 0)
    {
        // console.log('number is divisible by 3');
        result.innerHTML=`<div class="alert alert-success" role="alert">
        This number can be divide by 3
        </div>`;
        
    }
    else
    {
        // console.log('number can\'t be divide by 3');
        result.innerHTML=`<div class="alert alert-warning" role="alert">
       This Number is not divisible by 3
        </div>`;
        
    }

}
