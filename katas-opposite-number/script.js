function opposite(number) {
  let oppNumber = 0;
  if (number === Math.abs(number)) {
    oppNumber = number - number * 2;
  } else {
    oppNumber = Math.abs(number);
  }
  return oppNumber;
}
