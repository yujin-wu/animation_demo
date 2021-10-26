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