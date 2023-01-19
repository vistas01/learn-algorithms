/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let merged = ""
    for (var i = 0; i < word1.length && i < word2.length; i++) {
        merged += word1[i] + word2[i]
    }
    if (word1.length < word2.length)
        merged += word2.slice(i, word2.length);
    else if (word2.length < word1.length)
        merged += word1.slice(i, word1.length);
    return merged;
};

//solution using String.prototype.charAt()
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let mergedStr = "";
    let len = Math.max(word1.length, word2.length);
    let i = 0;
    while (i < len) {
        mergedStr += word1.charAt(i) + word2.charAt(i);
        i++;
    }
    return mergedStr;
};