const findTheOldest = function(personArray) {

    let currentOldest = personArray[0];
    let currentYear = new Date().getFullYear();

    for (let person of personArray) {
        if (!('yearOfDeath' in person)) {
            person.yearOfDeath = currentYear;
        } 
        if (person.yearOfDeath - person.yearOfBirth > currentOldest.yearOfDeath - currentOldest.yearOfBirth) {
            currentOldest = person;
        }
    }

    return currentOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
