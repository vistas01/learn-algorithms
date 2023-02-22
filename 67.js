/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length > b.length) {
    var longer = a.split("").reverse();
    var shorter = b.split("").reverse();
  } else {
    var longer = b.split("").reverse();
    var shorter = a.split("").reverse();
  }
  for (let i = 0; i < longer.length; i++) {
    longer[i] = (Number(longer[i]) + Number(shorter[i] ?? "0")).toString();
    if (Number(longer[i]) === 2) {
      longer[i] = Number(0).toString();
      longer[i + 1] = (Number(longer[i + 1] ?? "0") + 1).toString();
    }
    if (Number(longer[i]) === 3) {
      longer[i] = Number(1).toString();
      longer[i + 1] = (Number(longer[i + 1] ?? "0") + 1).toString();
    }
  }
  return longer.reverse().join("");
};
