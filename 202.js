/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const happy = new Set();
    for (let index = 0; index < 999999999999; index++) {
        n = Number(n.toString().split('').map(el => el * el).reduce((acc, cur) => acc + cur))
        if(n === 1) return true;
        if(happy.has(n)) return false
        happy.add(n);
    }
    return false;
};
res = isHappy(19)
console.log(res)