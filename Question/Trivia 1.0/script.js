let score = 0;
let questionNum = 0;

//  iniatiate the quiz
document.getElementById('start').addEventListener('click', function () {

    // sending apirequest
    sendApirequest();
    $('#next').toggleClass('d-none')
    $('#start').toggleClass('d-none')

})


async function sendApirequest() {
    spinner.removeAttribute('hidden');
    // let response = await fetch('https://opentdb.com/api.php?amount=10');
    // let response = await fetch('partials/_questions.json');
    let response = await fetch('https://api.npoint.io/8e1e172fb315d2e60dc0');
    let data = await response.json();
    spinner.setAttribute('hidden', '');


    // display the question and answers
    Display(data);
    document.getElementById('next').addEventListener('click', function () {
        //  ++questionNum;
        questionNum++;
        // console.log(questionNum);
        if (questionNum <= data.results.length - 1) {
            spinner.removeAttribute('hidden');
            Display(data);
            spinner.setAttribute('hidden', '');
        }
        else {
            console.log('questions ended');

        }


    })

}
function Display(data) {


    //  console.log(data.results);
    let realQue = questionNum + 1;

    let questionNumber = document.getElementById('questionNumber');
    let question = document.getElementById('question');
    let options = document.getElementById('options');
    
            document.getElementById('score').innerHTML = `<p> Your Score: ${score}`

    // console.log(data.results.length);

    if(realQue<=10)
    {
    questionNumber.innerHTML = `Question${realQue} of ${data.results.length}`;
    }
    question.innerHTML = `Question:  ${data.results[questionNum].question}`;
    options.innerHTML = `  <div class="btn-group-vertical">
    <button class="btn btn-secondary option1" id="option1">${data.results[questionNum].answers[0]}</button>
    <button class="btn btn-secondary" id="option2">${data.results[questionNum].answers[1]}</button>
    <button class="btn btn-secondary" id="option3">${data.results[questionNum].answers[2]}</button>
    <button class="btn btn-secondary" id="option4">${data.results[questionNum].answers[3]}</button>
</div>`

    // console.log(questionNum);

    let option1 = document.getElementById('option1');
    let option2 = document.getElementById('option2');
    let option3 = document.getElementById('option3');
    let option4 = document.getElementById('option4');
    option1.addEventListener('click', function () {
        console.log(option1.innerText);
        let userAns = option1.innerText;
        // console.log(data.results[q]);

        if (userAns == data.results[questionNum].correct_answer) {
            console.log('this is correct answer');
            score++;
            questionNum++;
            Display(data);
        }
        else {
            console.log('try different');
            questionNum++;
            Display(data);
        }
    })
    option2.addEventListener('click', function () {
        console.log(option2.innerText);
        let userAns = option2.innerText;
        // console.log(data.results[q]);

        if (userAns == data.results[questionNum].correct_answer) {
            console.log('this is correct answer');
            score++;
            questionNum++;
            Display(data);
        }
        else {
            console.log('try different');
            questionNum++;
            Display(data);
        }
    })
    option3.addEventListener('click', function () {
        console.log(option3.innerText);
        let userAns = option3.innerText;
        // console.log(data.results[q]);
        
        if (userAns == data.results[questionNum].correct_answer) {
            console.log('this is correct answer');
            score++;
            questionNum++;
            Display(data);
        }
        else {
            console.log('try different');
            questionNum++;
            Display(data);
        }
    })
    option4.addEventListener('click', function () {
        console.log(option4.innerText);
        let userAns = option4.innerText;
        // console.log(data.results[q]);
        
        if (userAns == data.results[questionNum].correct_answer) {
            console.log('this is correct answer');
            score++;
            questionNum++;
            Display(data);
        }
        else {
            console.log('try different');
            questionNum++;
            Display(data);
        }
    })

    //     document.getElementById('option4').addEventListener('click', function () {
    //         // console.log('clicked');
    //         document.getElementById('alert').innerHTML = ``
    // //         document.getElementById('alert').innerHTML = `<div class="alert alert-primary" role="alert">
    // //       That was right answer
    // //       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    // // <span aria-hidden="true">&times;</span>
    // // </button>
    // //     </div>`;
            // setTimeout(function () { document.getElementById('alert').innerHTML = ''; }, 3000);

    //         score++;
    //         questionNum++;
    //         document.getElementById('score').innerHTML = `<p> Your Score: ${score}`
    //         if (questionNum <= data.results.length - 1) {
    //             Display(data)

    //         }
    //     })
    if (questionNum == data.results.length - 1) {
        // console.log('end reached');
        $('#next').toggleClass('d-none')
        $('#results').toggleClass('d-none')
        document.getElementById("results").addEventListener('click', function () {
            document.getElementById('result').innerHTML = `  <div class="jumbotron">
            <h1 class="display-4">Your Results</h1>
            <ul class="list-group " width="300px">
                <li class="list-group-item">Your Score : ${score}</li>
                <li class="list-group-item">Accuracy :${score * 100 / 10}% </li>
  </ul>
  <br>
  <button class="btn btn-primary"><a href="index.html" class="text-white">Play Again</a></button>
        </div>`
        })


    }


}
