var startButton = document.getElementById("start");
var timer = 60;
var questionNum = 0;
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
    if (timer < 0 || questionNum === questions.length) {
        clearInterval(clock);
        setTimeout(scorePage, 2000);
    }
}, 1000);

// Function to cycle through questions and answers
// I searched through gitHub for code quiz examples and also spoke with classmates about this homeowrk. The code cited below was particularly helpful to my understanding of the function to make the the questions and answers cycle through it. I have made changes whenever possible to make the code as much mine as I could.
// [https://github.com/lbernadel/Code-Quiz]

function openQuiz() {
    answer = questions[questionNum].right

    quizQuestion.textContent = questions[questionNum].question;
    options.innerHTML = "";

    var choices = questions[questionNum].choices;

    for (var i = 0; i < choices.length; i++) {
        var fillButtons = document.createElement("button");
        fillButtons.textContent = choices[i]
        buttonChoices = options.appendChild(fillButtons).setAttribute("class", "btn btn-success mb-2 btn-block");
    }
    questionNum++;
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
        evalAnswer.innerHTML = "Survey says — wrong!";
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

// I still need additional JavaScript to finish this project. The missing code that needs to be added includes a function that will capture scores from the timer and then add the those scores to another html page.  
// This would be done via local storage, but that's a concept that I still need to better understand. 