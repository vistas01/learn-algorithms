var isAlienSorted = function (words, order) {
  let map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i + 1);
  }
  function parse(num) {
    if (num < 10) return `0${num}`;
    return `${num}`;
  }
  let wordsToNum = words.map((el) => {
    let res = "";
    el.split("").forEach((char) => (res += parse(map.get(char))));
    for (let i = res.length; i < 40; i++) {
      res += "0";
    }
    return res;
  });
  let unsorted = wordsToNum.slice();
  console.log(wordsToNum);
  let sorted = wordsToNum.sort();
  console.log(unsorted);
  console.log(sorted);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== unsorted[i]) return false;
  }
  return true;
};
