let timer;
let seconds = 0, minutes = 0, hours = 0;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateDisplay, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector(".timer-display").innerText = "00:00:00";
}

function updateDisplay() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    let displayTime = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    
    document.querySelector(".timer-display").innerText = displayTime;
}
