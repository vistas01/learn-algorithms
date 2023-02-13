/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.length % i === 0) {
      let j = 0;
      let str = "";
      while (j < s.length / i) {
        str += s.slice(0, i);
        j++;
      }
      if (str === s) return true;
    }
  }
  return false;
};
