/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let incre = true;
  let decre = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) incre = false;
    if (nums[i] > nums[i - 1]) decre = false;
  }
  return incre || decre;
};
