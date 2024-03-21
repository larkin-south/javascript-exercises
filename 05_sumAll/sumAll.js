const sumAll = function(start, end) {
    let i = start + 1;

    while (i <= end) {
        start = start + i;
        i++;
    }

    return start;
};

// Do not edit below this line
module.exports = sumAll;
