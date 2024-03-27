function isIsogram(str) {
  str = str.toUpperCase();
  let result = true;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        result = false;
        break;
      }
    }
    if (result === false) {
      break;
    }
  }
  return result;
}
