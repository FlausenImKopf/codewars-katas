function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === Math.abs(arr[i])) {
      sum += arr[i];
    }
  return sum;
}
