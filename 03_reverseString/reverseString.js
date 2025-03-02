const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedArray = [];
    let reversedString = "";
    for (const char of stringArray) {
        reversedArray.unshift(char);
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
