const fibonacci = function(place) {
    let fiboArray = [1,1];

    if (+place < 0) {
        return "OOPS";
    }

    if (+place === 0) {
        return 0;
    }

    for (let i = 2; i < +place; i++) {
        fiboArray.push(fiboArray[(i - 2)] + fiboArray[(i - 1)]);
    }

    return fiboArray[fiboArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
