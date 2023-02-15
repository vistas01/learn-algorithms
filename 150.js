/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  var evalRPN = function (tokens) {
    while (tokens.length > 1) {
      for (let i = 0; i < tokens.length; i++) {
        if (isNaN(Number(tokens[i]))) {
          let cal = tokens[i - 2] + " " + tokens[i] + " " + tokens[i - 1];
          tokens.splice(i - 2, 3, String(Math.trunc(eval(cal))));
          break;
        }
      }
    }
    return Number(tokens[0]);
  };
};
