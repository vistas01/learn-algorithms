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
var maxDepth = function (root) {
  if (root === null) return null;
  return logerNode(root, 0);
  function logerNode(node, count) {
    count++;
    if (node.left === null && node.right === null) return count;
    if (node.left === null || node.right === null) {
      if (node.left === null) return logerNode(node.right, count);
      if (node.right === null) return logerNode(node.left, count);
    }
    return Math.max(logerNode(node.left, count), logerNode(node.right, count));
  }
};
