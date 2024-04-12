const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((prev, current) => {return prev + current}, 0);
};

const multiply = function(array) {
  return array.reduce((prev, current) => {return prev * current}, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(value) {
  let total = value;
  
  if (value > 1) {
    for (let i = value; (i - 1) > 0; i--) {
      total *= (i - 1);
    }
  } else if (value == 0 || value == 1) { return 1 };

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
