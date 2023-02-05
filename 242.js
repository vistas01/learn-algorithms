/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  s.split("").forEach((el) => {
    if (!map.has(el)) {
      map.set(el, { count: 1 });
    } else {
      map.get(el).count++;
    }
  });
  t.split("").forEach((el) => {
    if (map.has(el)) {
      map.get(el).count--;
    } else {
      map.set(el, { count: -1 });
    }
  });
  for (const [key, value] of map) {
    if (value.count) return false;
  }
  return true;
};
