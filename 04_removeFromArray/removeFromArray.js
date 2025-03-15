const removeFromArray = function(array, ...toBeRemoved) {
    for (const value of toBeRemoved) {
        while (array.includes(value)) {
            array.splice(array.indexOf(value), 1);
        }
    }

    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 7, 2));
// Do not edit below this line
module.exports = removeFromArray;
