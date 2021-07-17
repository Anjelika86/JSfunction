const isAdult = function (number) {
  if (isNaN(number)) {
    return null;
  }
  return number >= 18;
};
console.log(isAdult(20));
