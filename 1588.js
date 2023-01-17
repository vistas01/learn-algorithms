/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    function subArr(len, arr) {
        let subarr = [];
        for (let i = 0; i <= arr.length - len; i++) {
            subarr.push(arr.slice(i, i + len))
        }
        return subarr;
    }
    let res = [];
    if (arr.length === 0) return 0;
    for (let i = 1; i < arr.length; i += 2) {
        res.push(subArr(i, arr))
    }
    return res;
};
