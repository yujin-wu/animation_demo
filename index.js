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

// TIMER APP

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

// ANIMATIONS ==============================

const character = document.getElementById("character");

const handleBoxAnimationStart = () => {
    setTimeout(() => {
        character.style.left = `${Math.random() * 250}px`
        character.style.top = `${Math.random() * 250}px`;
        
        // make card flip
        // character.style.transform = `rotateY(90deg)`;
        character.style.backgroundColor = 
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    }, 1000)
}

const car = {
    x: 0,
    y: 0,
    direction: "right"
}

const carElement = document.getElementById("car");

const handleCarGameStart = () => {
    setInterval(() => {
        carElement.style.left = `${car.x}px`;
        carElement.style.top = `${car.y}px`;

        car.x += 30;
    }, 500)
}