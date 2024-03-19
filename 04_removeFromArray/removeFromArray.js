const removeFromArray = function(array) {

    let position;
    let newArray = array;

    while (array.indexOf(3) > -1) {
        position = array.indexOf(3);
        newArray.splice(position);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
