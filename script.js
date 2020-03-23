var timer = 60;

// timer function that fires once user loads quiz page
var countdown = setInterval(function () {
    document.getElementById("counter").innerHTML = timer;
    timer--;
    if (timer < 0) {
        clearInterval(countdown);
    }
}, 1000);
