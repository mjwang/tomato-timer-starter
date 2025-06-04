console.log("Hello!")

function updateTimerDisplay(minutes, seconds) {
    const timeLeft = document.getElementById('time-left');
    timeLeft.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;

}

let countdown;
function clearTimer() {
    clearInterval(countdown);
}

/**
 * 
 * @param {*} duration in SECONDS
 */
function startTimer(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    //call update Timer display with minutes, seconds remaining
    updateTimerDisplay(minutes, seconds)

    countdown = setInterval(() => {
        duration --;
        minutes = Math.floor(duration / 60);
        seconds = duration % 60;
        updateTimerDisplay(minutes, seconds)
    }, 1000);

    setTimeout(() => {
        console.log("CLEARING TIMER")
        clearTimer();
    }, duration * 1000);

}

const startStudySession = () => {
    clearTimer()
    startTimer(25 * 60)

    const studyCount = document.getElementById('study-count')
    const initialCount = parseInt(studyCount.textContent)
    studyCount.innerText = initialCount + 1
}

const startStudyButton = document.getElementById('study-btn')
startStudyButton.addEventListener('click', startStudySession)

const startBreakButton = document.getElementById('break-btn')
startBreakButton.addEventListener('click', () => {
    clearTimer()
    startTimer(5 * 60)

    const breakCount = document.getElementById('break-count')
    const initialCount = parseInt(breakCount.textContent)
    breakCount.innerText = initialCount + 1
})