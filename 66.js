/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let rev = digits.reverse();
  rev[0]++;
  for (let i = 0; i < rev.length; i++) {
    if (rev[i] === 10) {
      rev[i] = 0;
      if (!rev[i + 1]) rev[i + 1] = 0;
      rev[i + 1]++;
    }
  }
  return rev.reverse();
};
