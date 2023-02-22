/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length > b.length) {
    var longer = a
      .split("")
      .reverse()
      .map((el) => Number(el));
    var shorter = b
      .split("")
      .reverse()
      .map((el) => Number(el));
  } else {
    var longer = b
      .split("")
      .reverse()
      .map((el) => Number(el));
    var shorter = a
      .split("")
      .reverse()
      .map((el) => Number(el));
  }
  for (let i = 0; i < longer.length; i++) {
    longer[i] += shorter[i] ?? 0;
    if (longer[i] > 1) {
      longer[i] = longer[i] % 2;
      longer[i + 1] = (longer[i + 1] ?? 0) + 1;
    }
  }
  return longer
    .map((el) => el.toString())
    .reverse()
    .join("");
};
