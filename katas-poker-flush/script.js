function isFlush(cards) {
  const flush = new Set();
  for (let item of cards) {
    flush.add(item[item.length - 1]);
  }
  return flush.size === 1;
}
