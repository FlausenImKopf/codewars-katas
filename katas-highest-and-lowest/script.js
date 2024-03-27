function highAndLow(numbers) {
  const sortedArray = numbers.split(" ").sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1] + " " + sortedArray[0];
}
