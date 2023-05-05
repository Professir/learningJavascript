const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const minutes = document.querySelector(".duration .minutes");
const seconds = document.querySelector(".duration .seconds");
const miliseconds = document.querySelector(".duration .miliseconds");

let startTime = 0,
elapsedTime = 0,
timerInterval;


const startTimer = () => {
    if(startTime != 0) return;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
}

const stopTimer = () => {
    clearInterval(timerInterval);
    startTime = 0;
}

const resetTimer = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime(0);
}

const updateTimer = () => {
    elapsedTime = Date.now() - startTime;
    displayTime(elapsedTime);
}


function displayTime(time) {
    let min = Math.floor((time / 1000 / 60) % 60)
    let sec = Math.floor((time / 1000) % 60)
    let milisec = Math.floor((time % 1000) / 10)

    minutes.innerText = `${min.toString().padStart(2, '0')}`;
    seconds.innerText = `${sec.toString().padStart(2, '0')}`;
    miliseconds.innerText = `${milisec.toString().padStart(2, '0')}`;
}


startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);