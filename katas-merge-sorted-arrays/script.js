function mergeArrays(arr1, arr2) {
  let result;
  if (arr1.length === 0 && arr2.length === 0) {
    result = [];
  } else {
    const arr3 = arr1.concat(arr2);
    function sortNum(Wert2, Wert1) {
      const result = Wert2 - Wert1;
      return result;
    }
    arr3.sort(sortNum);
    function uniqueEntries(value, index, array) {
      return array.indexOf(value) === index;
    }
    result = arr3.filter(uniqueEntries);
  }
  return result;
}
console.log(mergeArrays([7], [1, 5, 6]));

//Zweiter Lösungsweg über set und mit arrow function:
// function mergeArrays(arr1, arr2) {
//     const arr3 = arr1.concat(arr2);
//     arr3.sort(((a,b) => a - b ));
//     const unique =  new Set(arr3);
//     return Array.from(unique);
//   }
