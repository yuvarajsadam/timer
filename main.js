 let duration = 1500; // Default 25 minutes
let remaining = duration;
let timer = null;

const display = document.getElementById('display');
const alertSound = document.getElementById('alertSound');

function formatTime(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `00:${m}:${s}`;
}

function updateDisplay() {
    display.textContent = formatTime(remaining);
}

function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        if (remaining > 0) {
            remaining--;
            updateDisplay();
            if (remaining === 0) {
                clearInterval(timer);
                timer = null;
                alertSound.play();
            }
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    remaining = duration;
    updateDisplay();
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    remaining = duration;
    updateDisplay();
}

function setMode(mins) {
    stopTimer();
    duration = mins * 60;
    remaining = duration;
    updateDisplay();
}

updateDisplay();
