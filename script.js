let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime = 0;
let running = false;
let paused = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const laps = document.getElementById("laps");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", recordLap);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(updateTime, 1);
        running = true;
        paused = false;
    }
}

function pauseTimer() {
    if (!paused) {
        clearInterval(tInterval);
        savedTime = new Date().getTime() - startTime;
        running = false;
        paused = true;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    savedTime = 0;
    running = false;
    paused = false;
    display.textContent = "00:00:00";
    laps.innerHTML = "";
}

function updateTime() {
    updatedTime = new Date().getTime() - startTime;
    difference = new Date(updatedTime);
    let hours = String(difference.getUTCHours()).padStart(2, "0");
    let minutes = String(difference.getUTCMinutes()).padStart(2, "0");
    let seconds = String(difference.getUTCSeconds()).padStart(2, "0");
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function recordLap() {
    if (running) {
        let lapTime = display.textContent;
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        laps.appendChild(lapItem);
    }
}
