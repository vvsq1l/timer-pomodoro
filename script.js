const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let timeLeft = 25 * 60;
let timerId = null;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    display.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}
function startTimer() {
timerId = setInterval(function() {
    timeLeft--
    updateDisplay();
    if (timeLeft === 0) {
        clearInterval(timerId);
        display.classList.add("finished");
    }
}, 1000);
}

startBtn.addEventListener("click", function() {
    if (timerId !== null) return;
    startTimer()
});

pauseBtn.addEventListener("click", function() {
    clearInterval(timerId);
    timerId = null;
});

resetBtn.addEventListener("click", function() {
   clearInterval(timerId);
   timerId = null;
   timeLeft = 25 * 60;
   updateDisplay();
   display.classList.remove("finished");
});