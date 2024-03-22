const sumAll = function(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1,num2);    
    let i = start + 1;

    if (start < 0 || end < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) || isNaN(start) || isNaN(end)) {
        start = "ERROR";
    } else {
        while (i <= end) {
            start += i;
            i++;
        }
    }

    return start;
};

// Do not edit below this line
module.exports = sumAll;
