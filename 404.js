0 / 5;
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  return recursive(root, 0);
  function recursive(node, acc) {
    if (node === null) return 0;
    if (node.left !== null) {
      if (node.left.left === null && node.left.right === null)
        return acc + node.left.val + recursive(node.right, acc);
    }
    return recursive(node.left, acc) + recursive(node.right, acc);
  }
};
