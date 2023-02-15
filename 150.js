/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let i = 0;
  while (tokens.length > 1) {
    if (isNaN(Number(tokens[i]))) {
      let cal = tokens[i - 2] + " " + tokens[i] + " " + tokens[i - 1];
      tokens.splice(i - 2, 3, String(Math.trunc(eval(cal))));
      i -= 2;
    }
    i++;
  }
  return Number(tokens[0]);
};
