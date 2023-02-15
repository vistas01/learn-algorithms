/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  function rec(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        let cal = arr[i - 2] + arr[i] + arr[i - 1];
        return rec(arr.splice(0, 3, eval(cal)));
      }
    }
  }
  return rec(tokens);
};
