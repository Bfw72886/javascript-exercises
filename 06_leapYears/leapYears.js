const leapYears = function(year) {
    let isLeapYear = false;

    // Leap years are years divisible by four 
    if (year % 4 === 0) {
        isLeapYear = true;

        // However, years divisible by 100 are not leap years
        // unless they are divisible by 400
        if (year % 100 === 0 && year % 400 != 0) {
            isLeapYear = false;
        }
    }

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
