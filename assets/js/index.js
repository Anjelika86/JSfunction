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

const areaOfTriangle = function (base, height) {
  if (isNaN(base - height)) {
    return null;
  }
  if (base <= 0 || height <= 0) {
    return null;
  }
  return (base * height) / 2;
};
console.log(areaOfTriangle(2, 4));
let s = areaOfTriangle(0, 22);
console.log(s);

const areaOfRectangle = function (a, b) {
  if (isNaN(a - b)) {
    return null;
  }
  if (a === b) {
    return null;
  }
  return a * b;
};
console.log(areaOfRectangle(3, 5));

const areaOfRhombus = function (a, h) {
  if (isNaN(a - h)) {
    return null;
  }
  if (a <= 0 || h <= 0) {
    return null;
  }
  return a * h;
};
console.log(areaOfRhombus(5, 10));
