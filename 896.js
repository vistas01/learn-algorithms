/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let increasing = [...nums];
  let decreasing = [...nums];
  increasing.sort((a, b) => a - b);
  decreasing.sort((a, b) => b - a);
  let res = [true, true];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== increasing[i]) res[0] = false;
    if (nums[i] !== decreasing[i]) res[1] = false;
  }
  console.log(increasing, decreasing);
  return res[0] || res[1];
};
