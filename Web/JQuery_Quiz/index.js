

STORE = [
    { question: "Who developed jQuery, and in which year it was first released?",
    answer: ["John Richard in 2001", "Mark Bensman in 2004", "John Resig in 2006", "None of the above" ],
    correctAnswer:"John Resig in 2006"
    },
    { question: " The jQuery used to find all next sibling elements after the current element is -",
    answer: ["find() method", "nextAll() method", "siblings() method", "None of the above"],
    correctAnswer:"nextAll() method"
    },
    { question: "Which of the following sign is used as a shortcut for jQuery?",
    answer: ["the % sign", "the & sign", "the $ sign", "the @ sign"],
    correctAnswer: "the $ sign"
    },
    { question: "Which of the following jQuery method is used to hide the selected elements?",
    answer: ["The hidden() method", "The hide() method", "The visible(false) method", "The display(none) method"],
    correctAnswer: "The hide() method"
    },
    { question: "Which of the following jQuery method is used to attach a handler to an event?",
    answer: ["unbind() method", "attach() method", "bind() method", "None of the above"],
    correctAnswer: "bind() method"
    }
]

let qNumber = 0;
let score = 0;

function startQuiz() {
    $('main').on('click', '#button-start', function(event){
        $('.start-quiz').hide();
        generateQuizQuestion();
    });
}

function generateQuizQuestion() {
    if (qNumber < STORE.length) {
    let question =$(`<form class ="js-quiz-form">
    <legend class = "question">${STORE[qNumber].question}</legend>
    <ul class="radiogroup" role="radiogroup" aria-labelledby="question"></ul>`);
    let answers = STORE[qNumber].answer.map(function(answerValue, answerIndex){
        return `<label for="${answerValue}"><input type="radio" id="${answerValue}" name="answer" tabindex="${answerIndex}" value="${answerValue}" aria-checked="false" required>${answerValue}</label><br>`;
    });
    let button = $(`<button type="submit" id ="button-submit">Submit</button></form>`)
    $('.js-quiz').append(question);
    $('.radiogroup').append(answers, button);
    questionNumber();
} else {
    displayResults();
}

}

function questionChecker(){
    $('main').on('click','#button-submit', function (event){
        if ($('input:radio').is(':checked')) {
        event.preventDefault();
        let selectedAnswer= $("input[name=answer]:checked").val();
        console.log(selectedAnswer);
        if (selectedAnswer === STORE[qNumber].correctAnswer) {
            rightAnswer();
        } else {
                wrongAnswer();
            }
        }else {
            alert('Please select an answer.')
        }
    });
}

function questionNumber(){
    $('header').find('#question-number').text(qNumber+1);
}

function scoreKeeper(){
    score++;
    $('header').find('#score').text(`${score}/5`);

}

function rightAnswer() {
    console.log('rightAnswer ran');
    $('.js-quiz-form').hide();
    $('.js-answer').append(`<h2>You're Right!</h2>
    
    <p>Great Job.</p>
    <button type="button" id ="button-next">Next Question</button>`).show();
    scoreKeeper();
}

function wrongAnswer() {
    $('.js-quiz-form').hide();
    $('.js-answer').append(`<h2>You're Wrong!</h2>
        
        <h3>The correct answer is:</h3>
        <p><span class="correct-answer">${STORE[qNumber].correctAnswer}</span></p>
        <button type="button" class="btn btn-primary" id ="button-next">Next</button>`).show();


}

function nextQuestion() {
    $('main').on('click','#button-next', function(event) {
        $('.js-answer').empty();
        $('.js-quiz-form').empty();
        qNumber++;
        generateQuizQuestion();
        $('js-quiz-form').show();
    });
}

function displayResults(){
    console.log("`displayResults` ran");
    let finalScore = (score/5)*100;
    $('.js-answer').append(`<h2>Quiz Results</h2>
    <img id="paint-bucket" alt="red paint bucket" src = "img/paint-bucket.jpg"/>
    <h3>${finalScore}%</h3>
    <p>You got <span class="right-answers">${score} </span>out of 5 questions right.</p>
    <button type="button" id ="button-restart">Start a New Quiz</button>`)
}

function restartQuiz(){
    console.log('restart quiz ran');
 $('main').on('click', '#button-restart', function(event){
     console.log('restart button clicked');
    score = 0;
    qNumber = 0;
    $('.js-answer').empty();
    $('.js-quiz-form').empty();
    $('.start-quiz').show();
    $('header').find('#score').text(`${score}/5`);
    $('header').find('#question-number').text(`${qNumber}`);
 });
}

function handleQuizApp(){
    startQuiz();
    questionChecker();
    nextQuestion();
    restartQuiz();
}

$(handleQuizApp);