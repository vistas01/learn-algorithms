/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let diff = [];
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]) diff.push({index: i, value: s1[i], ref: s2[i]});
    }
    if(diff.length === 0) return true;
    if(diff.length === 2){
        if(s1[diff[0].index] === s2[diff[1].index] && s1[diff[1].index] === s2[diff[0].index]) return true;
    }
    return false;
};





/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 == s2) return true;
  
    let counter = 0;
    let arr1 = s1.split('').sort()
    let arr2 = s2.split('').sort()

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
        if (s1[i] !== s2[i]) counter++;
    }
    return counter <= 2 ? true : false;
};

/* better solution
var areAlmostEqual = function(s1, s2) {
    if (s1 == s2) return true;
  
    let counter = 0;
    let arr1 = s1.split('').sort()
    let arr2 = s2.split('').sort()

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
        if (s1[i] !== s2[i]) counter++;
    }
    return counter <= 2 ? true : false;
};
 */