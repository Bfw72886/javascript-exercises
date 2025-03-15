const sumAll = function(num1, num2) {
    let sum = 0;
    let from;
    let to;

    if (num1 <= num2) {
        from = num1;
        to = num2;
    } else {
        from = num2;
        to = num1;
    }

    if (from < 0) {
        return "ERROR";
    }

    if (typeof from != "number" || typeof to != "number") {
        return "ERROR";
    }

    if (!Number.isInteger(from) || !Number.isInteger(to)) {
        return "ERROR";
    }

    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
