let category=document.getElementById("category").innerText
sendApiRequest(category)


async function sendApiRequest(category)
{
    let response = await fetch(`jsons/${category}.json`);
    let data = await response.json();
    // console.log(data);
    Display(data)
    
}


function Display(data)
{
    // console.log('display function is on work');
    // let realQue = questionNum + 1;
    
    let questions = document.getElementById('questions');

    // console.log(questions);
    

    for(i=0;i<data.results.length;i++)
    {
        // console.log(i);
        
        questions.innerHTML+=`<section class="question container mt-3">

        <div class="user">
            <div class="watch">
                <div class="eye mr-3">
                    <p href=""><i class="fas fa-eye"></i><span>1.2k</span></p>
                </div>
            </div>
            <div class="like mr-3">
                <i class="fas fa-thumbs-up"></i>
            </div>
            <div class="fav mr-3">
                <i class="far fa-heart"></i>
            </div>
        </div>
        <div class="question-title">
            <p>
                <span>Q:</span> ${data.results[i].question}
            </p>
        </div>
        <div class="options">
        <div class="container d-flex"> <span>A.</span> <p class="option1"> ${data.results[i].answers[0]}</p> </div>
        <div class="container d-flex"> <span>A.</span> <p class="option1"> ${data.results[i].answers[1]}</p> </div>
        <div class="container d-flex"> <span>A.</span> <p class="option1"> ${data.results[i].answers[2]}</p> </div>
        <div class="container d-flex"> <span>A.</span> <p class="option1"> ${data.results[i].answers[3]}</p> </div>
           
        </div>
        <div class="report mr-3 mt-1">
            <i class="fas fa-exclamation-triangle report-c"></i>
        </div>
        <div class="check-ans">

            <a data-toggle="collapse" data-target="#q1" href=""><i
                    class="fas fa-hand-pointer mr-2 show"></i>Show Answer</a>
            <a data-toggle="collapse" data-target="#q1" href="" class="second"><i
                    class="fas fa-hand-pointer mr-2"></i>Hide Answer</a>

            <div id="${i}" class="collapse answer">
                Answer <p>${data.results[i].correct_answer}</p>
            </div>
        </div>`
    }

    Like()
    
    
}

 
  function Like()
  {

    //   like script
    jQuery('.like').click(function() {
        $(this).toggleClass('liked');
        console.log('working');
        
      });
    //   favourite script
     jQuery('.fav').click(function() {
        $(this).toggleClass('fav-click');
        // console.log('working');
        
      });
     jQuery('.option1').click(function() {
        // $(this).toggleClass('fav-click');
        // console.log('working');

        let user_answer=this.innerText;
       
        
        
      });



  }
