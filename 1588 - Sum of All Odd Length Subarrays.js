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
    for (let i = 1; i < arr.length + 1; i++) {
        if (i % 2 !== 0)
            res.push(subArr(i, arr))
    }
    console.log(res)
    return res.reduce((acc, cur) => acc.concat(cur)).reduce((acc, cur) => acc.concat(cur)).reduce((acc, cur) => acc += cur);
};
