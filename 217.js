/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set();
  for (num of nums) {
    set.add(num);
  }
  return set.size !== nums.length;
};
