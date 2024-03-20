const removeFromArray = function(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] != arguments[1]) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
