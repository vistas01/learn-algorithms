/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    function cal(k, arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > k) return arr[i + 1];
        }
        return -1;
    }
    return nums1.map(el => cal(el, nums2));
};




//solution using stack, map
/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let nums1Map = new Map();

    for (let i = 0; i < nums1.length; i++) {
        nums1Map.set(nums1[i], -1);
    }
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) stack.pop();

        if (nums1Map.has(nums2[i])) {
            if (stack.length !== 0) nums1Map.set(nums2[i], stack[stack.length - 1]);
        }
        stack.push(nums2[i]);
    }
    const result = [];
    nums1Map.forEach((v, k) => result.push(v));
    return result;
};
