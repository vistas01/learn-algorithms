/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let n1 = num1.split("");
  let n2 = num2.split("");
  let res = n1.reduce((acc, cur, i) => {
    //console.log(acc, cur);
    return (acc += n2.reduce((acc2, cur2, i2) => {
      console.log(cur, cur2);
      return (acc2 +=
        cur * cur2 * Math.pow(10, n1.length - i + (n2.length - i2) - 2));
    }, 0));
  }, 0);
  return res.toString();
};
