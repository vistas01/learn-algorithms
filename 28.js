/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let res = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let res = i;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) res = -1;
      }
      if (res !== -1) return res;
    }
  }
  return res;
};
