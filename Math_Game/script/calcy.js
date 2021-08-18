/* input with 3 buttons "add", "sum" and avarage
clickin on butting should add number to list and show next to button, "sum" should sum up inputs, and avarage should show avarage of input numers(2,3,4 or more)
*/

var add_btn=document.getElementById('add');
var sum_btn=document.getElementById('sum');
var average_btn=document.getElementById('average');
var reset_btn=document.getElementById('reset');

add_btn.addEventListener('click',add);

let first_number=0;

// inital array
var user_numbers=[];
function add ()
{
    let user_input=document.getElementById('user_input').value;
    // if user input is null return
    if(user_input=="")
    {
        // show error
        document.getElementById('warning').innerHTML=`<div class="alert alert-warning" role="alert">
        Please enter valid input
      </div>`;
        return;
    }
    
    // clear error
    document.getElementById('warning').innerHTML="";
    // convert user input in integer
    let second_num=parseInt(user_input);
    // console.log(second_num);

    // make addition of user input
  let  addition=first_number+second_num;

    //   push values in array
  user_numbers.push(second_num)

    //   make addition as first number
    first_number=addition;

    // value output
    document.getElementById('message').innerHTML="Value has been added"
      // reset average value
      document.getElementById('average_output').innerHTML="";
      
      // move focus on input
      document.getElementById('user_input').focus();

      // reset sum output
      document.getElementById('sum_output').innerHTML="";

      // reset input value
      document.getElementById('user_input').value="";

      // call input function
    Input()

    // repeat function 
    add_btn.addEventListener('click',add);

}

// sum of array
sum_btn.addEventListener('click', Sum);
function Sum()
{
    
   
    // calculate sum of total numbers of array
    var sum=user_numbers.reduce(function(acc, val) { return acc + val; }, 0)
    if(sum==0)
    {
        document.getElementById('warning').innerHTML=`<div class="alert alert-warning" role="alert">
        Please Add Values first!
      </div>`;
      return sum=0;
    }
      document.getElementById('sum_output').innerHTML=`Sum= ${sum}`;
      return sum;
}

average_btn.addEventListener('click', Average);

function Average()
{
    // calculating sum of total numbers
   var sum=Sum();
   if(sum==0)
   {
       document.getElementById('warning').innerHTML=`<div class="alert alert-warning" role="alert">
       Please Add Values first!
     </div>`;
    return;
   }

//    average calculation
   var average=sum/user_numbers.length;
   
   document.getElementById('average_output').innerHTML=`Average= ${average}`
   
}

reset_btn.addEventListener('click',()=>{

        // reset array
        user_numbers=[];

        // reset average value
        console.log(user_numbers);
        document.getElementById('average_output').innerHTML="";

        // reset sum output
        document.getElementById('sum_output').innerHTML="";

        // reset warning output
        document.getElementById('warning').innerHTML="";
        // reset input value
        document.getElementById('user_input').value="";
})

function Input()
{
    document.getElementById('warning').innerHTML=`Your Inputs: ${user_numbers}`
}