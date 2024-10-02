const leapYears = function(year) {
    const divisibleByFour = (year % 4) === 0;
    const divisibleBy100 = (year % 100) === 0;
    const divisibleBy400 = (year % 400) === 0;

    if (divisibleBy400) {
        return true;
    } else if (divisibleBy100) {
        return false;
    } else if (divisibleByFour) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
