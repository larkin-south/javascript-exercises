const findTheOldest = function(array) {
    return array.reduce((prev, current) => {
        let oldest = getAge(prev);
        let newAge = getAge(current);

        if (newAge > oldest) {
            return current;
        } else {
            return prev;
        }
    })


};

function getAge(person) {
    if (isNaN(person.yearOfDeath)) {
        let currentYear = new Date().getFullYear();
        let age = currentYear - person.yearOfBirth;
        return age;
    }
    
    let age = person.yearOfDeath - person.yearOfBirth;
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
