const removeFromArray = function(array,...args) {
    let newArray = [];
    // for (item in args) {
    //     for (value in array) {

    //     }
    // }

    // return newArray;

    // for (item in args) {
    //         if (!array.includes(item)) {
    //             let index = array.indexOf(item);
    //             newArray.push(array.index);
    //         }
    //     }

    // return array.indexOf(item);

    for (item in array) {
        if (!args.includes(array[item])) {
            newArray.push(array[item]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
