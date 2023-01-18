/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = [];
    for(let i = 0; i < accounts.length; i++){
        res.push(accounts[i].reduce((acc, cur) => acc += cur))
    }
    return Math.max(...res)
};