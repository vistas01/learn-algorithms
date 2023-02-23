/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let res = [],
    i = num.length;
  while (i-- > 0 || k) {
    k += num[i] ?? 0;
    res.unshift(k % 10);
    k = Math.trunc(k / 10);
  }
  return res;
};
