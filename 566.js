/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    function parse(mat) {
        return mat.reduce((acc, cur) => acc.concat(cur));
    }
    function shape(arr, length) {
        let rows = [];
        for (let i = 0; i < arr.length / length; i++) {
            let row = [];
            for (let j = 0; j < length; j++) {
                row.push(arr[i * length + j])
            }
            rows.push(row);
        } return rows;
    }
    if (parse(mat).length !== c * r) return mat;
    return shape(parse(mat), c);
};

//better solution
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let m = mat.length
    let n = mat[0].length
    if (m * n != r * c) return mat

    let reshaped = []
    let original = []

    for (let x of mat) original.push(...x)

    for (let x = 0; x < original.length; x += c) reshaped.push(original.slice(x, x + c))

    return reshaped
};