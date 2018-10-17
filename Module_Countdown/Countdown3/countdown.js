let decrementsPerSecond = 1;

let setDecrementsPerSecond = function(decrements){
    decrementsPerSecond = decrements;
};


let setCountdown = function(callback, counter) {
    console.log(callback);
    console.log("starts in ...");

    console.log(counter);

    let timer = setInterval(() => {
        console.log(--counter)
    }, 1000/decrementsPerSecond);

    setTimeout(() => {
        clearInterval(timer);
        callback();
    }, counter * 1000/decrementsPerSecond + 100);
};

module.exports.setCountdown = setCountdown;
module.exports.setDecrementsPerSecond = setDecrementsPerSecond;
