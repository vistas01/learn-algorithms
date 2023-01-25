/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let sSorted = s.split('').sort();
    let tSorted = t.split('').sort();
    for (let i = 0; i < sSorted.length; i++) {
        if (sSorted[i] !== tSorted[i]) return tSorted[i];
    }
    return tSorted.at(-1)
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let map = new Map();
    for (let char of s) {
        if (!map.has(char)) map.set(char, { count: 1 });
        else map.get(char).count++;
    }
    for (let char of t) {
        if (!map.has(char) || map.get(char).count === 0) return char;
        map.get(char).count--;
    }
};
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const map = new Map()

    for (let c of s) {
        if (!map.has(c)) {
            map.set(c, 0)
        }
        map.set(c, map.get(c) + 1)
    }
    for (let c of t) {
        if (!map.has(c) || map.get(c) === 0) return c
        map.set(c, map.get(c) - 1)
    }



    /**
     * @param {string} s
     * @param {string} t
     * @return {character}
     */
    var findTheDifference = function (s, t) {
        let ms = {},
            mt = {};

        for (let i = 0; i < t.length; i++) {
            if (s[i])
                ms[s[i]] = ms[s[i]] ? ms[s[i]] + 1 : 1;
            mt[t[i]] = mt[t[i]] ? mt[t[i]] + 1 : 1;
        }

        for (let [k, v] of Object.entries(mt)) {
            if (!ms[k] && mt[k] || mt[k] !== ms[k]) return k;
        }
    };

};