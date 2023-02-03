/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  convert = function (num) {
    return num.toString(2);
  };
  /**
   * @param {String} str
   */
  function count(str) {
    return str.split("").reduce((acc, cur) => {
      if (cur === "1") return acc + 1;
      return acc;
    }, 0);
  }
  let res = [];
  arr.forEach((el) => {
    res.push({ key: el, value: count(convert(el)) });
  });
  return res
    .sort((a, b) => a.key - b.key)
    .sort((a, b) => a.value - b.value)
    .map((el) => el.key);
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let res = [];
  arr.forEach((el) => {
    res.push({ key: el, value: el.toString(2).split("1").length - 1 });
  });
  return res
    .sort((a, b) => a.key - b.key)
    .sort((a, b) => a.value - b.value)
    .map((el) => el.key);
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = (arr) => arr.sort((a, b) => countBit(a) - countBit(b) || a - b);

const countBit = (number) => {
  let amountOfBits = 0;
  while (number) {
    amountOfBits += number & 1;
    number >>= 1;
  }
  return amountOfBits;
};
