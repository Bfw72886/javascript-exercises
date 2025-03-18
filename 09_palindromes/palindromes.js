const palindromes = function (word) {
    let letterArray = word.toLowerCase().replace(/[\s\.\?!,;:'"-]/g, '').split('');
    let reversedArray = word.toLowerCase().replace(/[\s\.\?!,;:'"-]/g, '').split('').reverse();
    return reversedArray.join('') === letterArray.join('');
};

// Do not edit below this line
module.exports = palindromes;
