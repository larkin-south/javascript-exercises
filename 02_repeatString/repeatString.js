const repeatString = function(string, num) {
    
    if (num < 0) {
        string = "ERROR";
    } else if (string == '') {

    } else {
        string = string.repeat(num);
    };

    return string;
};

// Do not edit below this line
module.exports = repeatString;
