const reverseString = function(string) {
    let textOutput = "";

    for (let i = string.length - 1; i >= 0; i--) {
        textOutput += string[i]
    }

    return textOutput;
};

// Do not edit below this line
module.exports = reverseString;
