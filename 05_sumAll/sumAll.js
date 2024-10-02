const sumAll = function(num1, num2) {
    let nonIntegerInput = !Number.isInteger(num1) || !Number.isInteger(num2);
    if (nonIntegerInput){
        return "ERROR";
    }

    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    if (min < 0) {
        return "ERROR";
    }

    let result = 0;
    for (let i = min; i <= max; i++) {
        result = result + i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
