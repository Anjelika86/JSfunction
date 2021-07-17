const isAdult = function (number) {
  if (isNaN(number)) {
    return null;
  }
  return number >= 18;
};
console.log(isAdult(17));

const checkMultiplicity = function (number1, number2) {
  if (isNaN(number1 - number2)) {
    return null;
  }

  return number1 % number2 === 0;
};
console.log(checkMultiplicity(15, 4));
