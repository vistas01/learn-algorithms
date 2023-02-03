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
