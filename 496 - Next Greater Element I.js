/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    function cal(k, arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > k) return i + 1;
        }
        return -1;
    }
};