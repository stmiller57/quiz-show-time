var startButton = document.getElementById("start");
var timer = 60;
var questionNumber = -1;
var answer;
var quizQuestion = document.getElementById("questions");
var options = document.getElementById("answers");

// Add click functionality to the startButton
startButton.addEventListener("click", startQuiz);

// Function to start quiz and have the questions appear
function startQuiz() {
    document.getElementById("intro").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');
    openQuiz();
}
// timer function that starts at 60 seconds when questions appear
var countdown = setInterval(function () {
    document.getElementById("counter").innerHTML = timer;
    timer--;
    if (timer < 0) {
        clearInterval(countdown);
    }
}, 1000);

// Function to cycle through questions and answers
function openQuiz() {
    questionNumber++;
    answer = questions[questionNumber].answer

    quizQuestion.textContent = questions[questionNumber].question;
    options.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var i = 0; i < choices.length; i++) {
        var nextOption = document.createElement("button");

        nextOption.textContent = choices[i]
        answerButton = options.appendChild(nextOption).setAttribute("class", "p-4 m-2 btn btn-success btn-block");
    }
}

function showAlert() {
    var evalAnswer = document.getElementsByClassName("alert")[0]
    evalAnswer.removeAttribute;
}

function hideAlert() {
    var evalAnswer = document.getElementsByClassName("alert")[0]
    evalAnswer.style.display;
}

options.addEventListener("click", function (event) {
    var evalAnswer = document.getElementsByClassName("alert")[0]
    if (answer === event.target.textContent) {
        evalAnswer.innerHTML = "Nailed it!";
        setTimeout(hideAlert, 1000);
        showAlert();
    }
    else {
        evalAnswer.innerHTML = "That's a brick!";
        setTimeout(hideAlert, 1000);
        timer = timer - 10;
        showAlert();
    }
    openQuiz();

});