var submit=document.getElementById('submit');
var result=document.getElementById('result');
var user_score=0;
var percentage=0;
submit.addEventListener('click',function()
{
     user_score=0;
     percentage=0;
    score();
})
function score()
{
    
  var answer_1= document.querySelector(`input[name=answer_1]:checked`).value
  var answer_2= document.querySelector(`input[name=answer_2]:checked`).value
  var answer_3= document.querySelector(`input[name=answer_3]:checked`).value
  var answer_4= document.querySelector(`input[name=answer_4]:checked`).value
  var answer_5= document.querySelector(`input[name=answer_5]:checked`).value
  var answer_6= document.querySelector(`input[name=answer_6]:checked`).value
  var answer_7= document.querySelector(`input[name=answer_7]:checked`).value
  CheckScore(answer_1);
  CheckScore(answer_2);
  CheckScore(answer_3);
  CheckScore(answer_4);
  CheckScore(answer_5);
  CheckScore(answer_6);
  CheckScore(answer_7);  
}
function CheckScore(e)
{
    // console.log(e);
    
    if(e=="true")
    {
       user_score=user_score+1;
       
    }
     percentage=(user_score*100)/7;
     percentage=String(percentage).slice(0,4)
     console.log(percentage);
    result.innerHTML=`  Your Score = <input type="text" id="score" disabled value="${user_score}">
            Your Score In percenatge = <input type="text" id="score" disabled value="${percentage}%">`;
}