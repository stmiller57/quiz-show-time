var timer = document.getElementById("counter").textContent;
var countdown = setInterval(function () {
    timer--;
    document.getElementById("counter").textContent = timer;
    if (timer <= 0) clearInterval(countdown);
}, 1000);
