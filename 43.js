/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let n1 = new Map();
  let n2 = new Map();
  num1
    .split("")
    .reverse()
    .map((num, i) => {
      n1.set(i, Number(num));
    });
  num2
    .split("")
    .reverse()
    .map((num, i) => {
      n2.set(i, Number(num));
    });
  let prod = new Map();
  n1.forEach((val1, key1) => {
    n2.forEach((val2, key2) => {
      if (prod.has(key1 + key2)) {
        prod.set(key1 + key2, prod.get(key1 + key2) + val1 * val2);
      } else {
        prod.set(key1 + key2, val1 * val2);
      }
    });
  });
  prod.forEach((val, key) => {
    if (val > 9) {
      if (prod.has(key + 1)) {
        prod.set(key + 1, prod.get(key + 1) + Math.trunc(val / 10));
      } else {
        prod.set(key + 1, Math.trunc(val / 10));
      }
      prod.set(key, val % 10);
    }
  });
  let res = [...prod]
    .map(([key, val]) => val.toString())
    .reverse()
    .join("")
    .replace(/\b0+/g, "");
  return res.length !== 0 ? res : "0";
};
