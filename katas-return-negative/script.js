function makeNegative(num) {
  let result = num;
  if (num === Math.abs(num)) {
    result = -num;
  }
  return result;
}
