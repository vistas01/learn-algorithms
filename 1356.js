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
  let map = new Map();
  arr.forEach((el) => {
    map.set(el, count(convert(el)));
  });
  let res = [];
  map.forEach(value, (key) => {});
  return res;
};
