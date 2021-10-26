const runIt = (arg) => {
    console.log("I have ran!" + arg);
}

const handleSetTimeout = () => {
    setTimeout(runIt, 5000, " Hello");
}

let handler = null;

const handleSetInterval = () => {
    handler = setInterval(runIt, 1000, " Hello");
    setTimeout(() => {
        clearInterval(handler); 
    }, 10 * 1000);
}

const handleClearInterval = () => {
    if (handler === null) {
        alert("There is no interval to clear");
    } else {
        clearInterval(handler);
    }
}

let secondsRemaining = 10;
const timerDisplay = document.getElementById("time-heading");

const handleTimerStart = () => {
    const timerHandler = setInterval(() => {
        if (secondsRemaining === 0) {
            clearInterval(timerHandler);
        }
        timerDisplay.innerHTML = secondsRemaining;
        secondsRemaining --;
    }, 1000);    
}