const isAdult = function (number) {
  if (isNaN(number)) {
    return null;
  }
  return number >= 18;
};
console.log(isAdult(18));

const checkMultiplicity = function (number1, number2) {
  if (isNaN(number1 - number2)) {
    return null;
  }

  return number1 % number2 === 0;
};
console.log(checkMultiplicity(15, 5));

const checkTriangle = function (a, b, c) {
  if (isNaN(a - b - c)) {
    return null;
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    return null;
  }

  return a < b + c && b < a + c && c < a + b;
};

console.log(checkTriangle(3, 3, 3));
