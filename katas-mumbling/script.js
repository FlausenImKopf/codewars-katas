function accum(s) {
  let CapL;
  let repL;
  let result = "";
  for (i = 0; i < s.length; i++) {
    CapL = s[i].toUpperCase();
    repL = s[i].toLowerCase().repeat(i);
    if (i < s.length - 1) {
      result += CapL + repL + "-";
    } else {
      result += CapL + repL;
    }
  }
  return result;
}
