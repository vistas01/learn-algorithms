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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  for (char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (char of t) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
    if (!map.get(char)) map.delete(char);
  }
  return map.size;
};
