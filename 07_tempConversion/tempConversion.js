const convertToCelsius = function(temp) {
  temp = (temp - 32) / 1.8;

  if (temp != 0) {
    temp = Number(temp.toFixed(1));
  }

  return temp;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 1.8) + 32;

  if (temp != 0) {
    temp = Number(temp.toFixed(1));
  }

  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
