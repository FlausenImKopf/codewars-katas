function evenNumbers(array, number) {
  array = array.reverse();
  const newArray = [];
  for (let i = 0; number > 0; i++) {
    if (array[i] % 2 === 0) {
      newArray.unshift(array[i]);
      number--;
    }
  }
  return newArray;
}
