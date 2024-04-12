const palindromes = function (value) {
    let reg = RegExp(/[a-z,0-9]/i);
    let word = [...value].filter(item => {
        return reg.test(item) && item !== ",";
    })

    word = word.map(item => item.toLowerCase());

    return word.join("") == word.reverse().join("") ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
