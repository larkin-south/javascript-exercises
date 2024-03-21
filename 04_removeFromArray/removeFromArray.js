const removeFromArray = function(array,...args) {
    let newArray = [];

    for (item in array) {
        if (!args.includes(array[item])) {
            newArray.push(array[item]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
