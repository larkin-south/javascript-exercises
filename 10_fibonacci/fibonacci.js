const fibonacci = function(value) {
    let array = [0,1];
    
    if (value < 0) { return "OOPS" };
    
    for (let i = 2; i <= value; i++) {
        array.push(array[i-1] + array[i-2]);
    }

    return array[value];
};

// Do not edit below this line
module.exports = fibonacci;
