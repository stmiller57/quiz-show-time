var startButton = document.getElementById("start");
var timer = 60;
var questionNumber = 0;
var answer;
var quizQuestion = document.getElementById("questions");
var options = document.getElementById("answers");

// Add click functionality to the startButton
startButton.addEventListener("click", startQuiz);

// Function to start quiz and have the questions appear
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").classList.remove("invisible");
    openQuiz();
}
// timer that starts at 60 seconds when questions appear
var clock = setInterval(function () {
    document.getElementById("counter").innerHTML = timer;
    timer--;
    if (timer < 0 || questionNumber === questions.length) {
        clearInterval(clock);
        setTimeout(scorePage, 800);
    }
}, 1000);

// Function to cycle through questions and answers
function openQuiz() {
    answer = questions[questionNumber].right

    quizQuestion.textContent = questions[questionNumber].question;
    options.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var i = 0; i < choices.length; i++) {
        var fillButtons = document.createElement("button");
        fillButtons.textContent = choices[i]
        buttonChoices = options.appendChild(fillButtons).setAttribute("class", "btn btn-success mb-2 btn-block");
    }
    questionNumber++;
}

// Code to show Bootstrap style alerts for right and wrong answers
function showAlert() {
    var evalAnswer = document.getElementsByClassName("alert")[0]
    evalAnswer.removeAttribute('style');
}

function hideAlert() {
    var evalAnswer = document.getElementsByClassName("alert")[0]
    evalAnswer.style.display = 'none';
}

options.addEventListener("click", function (event) {
    var evalAnswer = document.getElementsByClassName("alert")[0]
    if (answer === event.target.textContent) {
        evalAnswer.innerHTML = "Nailed it!";
        setTimeout(hideAlert, 2 * 1000);
        showAlert();
    }
    else {
        evalAnswer.innerHTML = "Wrong! That's a brick!";
        setTimeout(hideAlert, 2 * 1000);
        timer = timer - 10;
        showAlert();
    }
    openQuiz();
});

function scorePage() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("scores").classList.remove("invisible");
};