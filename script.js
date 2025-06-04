console.log("Hello!")

function updateTimerDisplay(minutes, seconds) {
    const timeLeft = document.getElementById('time-left');
    timeLeft.innerText = `${minutes}:${seconds}`;

}

updateTimerDisplay(15, 17)