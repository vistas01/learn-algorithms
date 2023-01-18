/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    return nums.sort((a, b) => {
        if(b === 0) return -1;
        return 0;
    })
};
let res = moveZeroes([0,1,2,0,0,0,3,1,4]);
console.log(res)