/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  num.reverse();
  k.toString()
    .split("")
    .reverse()
    .map((el) => Number(el))
    .forEach((val, i) => {
      num[i] = (num[i] ?? 0) + val;
    });
  num.forEach((val, i) => {
    if (val > 9) {
      num[i + 1] = (num[i + 1] ?? 0) + Math.trunc(val / 10);
      num[i] = val % 10;
    }
  });
  return num.reverse();
};
