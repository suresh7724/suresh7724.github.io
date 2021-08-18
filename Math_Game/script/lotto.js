// 1.   first 6 number you put in yourself
// 2.  and just click on "shuffle" and randomly 6 numbers
//     Matched numbers will be in red background

var shuffle=document.getElementById('shuffle');
var highlight_number=document.getElementsByClassName('number');
let user_input=document.getElementsByClassName('user-input'); 
shuffle.addEventListener('click',Random);

// get user input here

var length=user_input.length;
function Random()
{

    
  // check if user provided same values
    let val_1=parseInt(user_input[0].value);
    let val_2=parseInt(user_input[1].value);
    let val_3=parseInt(user_input[2].value);
    let val_4=parseInt(user_input[3].value);
    let val_5=parseInt(user_input[4].value);
    let val_6=parseInt(user_input[5].value);

    // store it in array
    var user_arr=[val_1,val_2,val_3,val_4,val_5,val_6];

    // check unique values
    let duplicates = []
    
    const tempArray = [...user_arr].sort()
    
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    if(duplicates.length!=0)
    {
      document.getElementById('warning').innerHTML=`<div class="alert alert-danger" role="alert">
      Please Do not repeat same number!
    </div>`;
      clear()
      return;
      // if numbers are repeated function will return
    }

    // initially clear all backgrounds of input and check if function has null or out of range values
    for(i=0;i<length;i++)
    {
        user_input[i].style.backgroundColor = "transparent";
        if(user_input[i].value=="" || parseInt(user_input[i].value)<=0 || parseInt(user_input[i].value)>80)
        {
            // console.log('please fill all inputs');
            document.getElementById('warning').innerHTML=`<div class="alert alert-danger" role="alert">
            Please enter valid inputs!
          </div>`;
            clear()
            return;
        }
    }
    // clear warning 
    document.getElementById('warning').innerHTML="";

    // remove random number background
    for(let i=0; i<highlight_number.length;i++)
    {
        highlight_number[i].style.backgroundColor="transparent"
    }
        
        // 6 random values
        let var_1=Math.floor(Math.random() * 81);
        let var_2=Math.floor(Math.random() * 81);
        let var_3=Math.floor(Math.random() * 81);
        let var_4=Math.floor(Math.random() * 81);
        let var_5=Math.floor(Math.random() * 81);
        let var_6=Math.floor(Math.random() * 81);

        // display random numbers
        document.getElementById('random_numbers').innerHTML=`   <h2 class="text-center">Random numbers</h2>
        <div class="wrap">
    
            <div class="number"><span>${var_1}</span></div>
            <div class="number"><span>${var_2}</span></div>
            <div class="number"><span>${var_3}</span></div>
            <div class="number"><span>${var_4}</span></div>
            <div class="number"><span>${var_5}</span></div>
            <div class="number"><span>${var_6}</span></div>
        </div>`;
        
        // store that random values in array
        const Numbers=[var_1,var_2,var_3,var_4,var_5,var_6]
        // console.log(Numbers);

        // length of array
      var Numbers_length=Numbers.length;

        // innitially matched numbers will be 0
             let  matched_numbers=0;
             

            //  for loop to check user input
        for(let i=0;i<length;i++)
        {
     
            for(let j=0;j<Numbers_length;j++)
            {
                let user_number=parseInt(user_input[i].value);
                let random_number=Numbers[j];
               if(user_number==random_number)
               {
                
                // apply backgroound color to matched numbers
              user_input[i].style.backgroundColor = "red";
                highlight_number[j].style.backgroundColor="red"
              matched_numbers++

               }
            }            
            
        }
        // result section
        if(matched_numbers!=0)
        {
            document.getElementById('result').innerHTML=`<div class="alert alert-success container m-auto w-50" role="alert">
            You have ${matched_numbers} Matched numbers
          </div>`;
        }else
        {
            document.getElementById('result').innerHTML=`<div class="alert alert-danger container m-auto w-50" role="alert">
            You have ${matched_numbers} Matched numbers
          </div>`;
        }
        shuffle.innerHTML=`Shuffle Again`
    }
    
    // reset all the values
    var reset= document.getElementById('reset');
    reset.addEventListener('click', clear)

    // cler function
    function clear ()
    {
    shuffle.innerHTML=`Shuffle`;
    for(i=0;i<length;i++)
    {
        user_input[i].style.backgroundColor = "transparent";
        user_input[i].value="";
    }
    for(let i=0; i<highlight_number.length;i++)
    {
        highlight_number[i].style.backgroundColor="transparent"
    }
    document.getElementById('result').innerHTML="";
    document.getElementById('random_numbers').innerHTML="";

}