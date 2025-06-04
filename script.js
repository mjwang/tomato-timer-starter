console.log("Hello!")

function updateTimerDisplay(minutes, seconds) {
    const timeLeft = document.getElementById('time-left');
    timeLeft.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;

}

function startTimer(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    //call update Timer display with minutes, seconds remaining
    updateTimerDisplay(minutes, seconds)

    const countdown = setInterval(() => {
        duration -= 1;
        minutes = Math.floor(duration / 60);
        seconds = duration % 60;
        updateTimerDisplay(minutes, seconds)
    }, 1000);

    setTimeout(() => {
        console.log("CLEARING TIMER")
        clearInterval(countdown);
    }, duration * 1000);

}

startTimer(20)