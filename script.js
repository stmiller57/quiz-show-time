var timer = 60;

var countdown = setInterval(function () {
    document.getElementById("counter").innerHTML = timer;
    timer--;
    if (timer === 0) {
        clearInterval(countdown);
    }
}, 1000);