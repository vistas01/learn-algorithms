/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  function numToChar(num) {
    return String.fromCharCode(num + 96);
  }
  function parse(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 2) {
        res.push(str.slice(i, i + 2));
        return res;
      } else {
        res.push(str[i]);
      }
    }
  }
  let arr = s.split("#");
  let res = arr
    .slice(0, arr.length - 1)
    .map((el) => {
      if (Number(el) > 10) {
        return parse(el);
      }
      return el;
    })
    .flat()
    .map((el) => numToChar(Number(el)))
    .join("");
  if (Number(arr[arr.length - 1]) !== 0)
    for (let i = 0; i < arr[arr.length - 1].length; i++) {
      res += numToChar(Number(arr[arr.length - 1][i]));
    }
  return res;
};

var freqAlphabets = function (s) {
  function numToChar(num) {
    return String.fromCharCode(num + 96);
  }
  function parse(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 2) {
        res.push(str.slice(i, i + 2));
        return res;
      } else {
        res.push(str[i]);
      }
    }
  }
  let str = s + "10#";

  return res;
};
