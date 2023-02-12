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
 * @return {boolean}
 */

var isBalanced = function (root) {
  if (!root) return true;
  TreeNode.prototype.set = function () {
    let leftD = this.left !== null ? this.left.set() : 0;
    let rightD = this.right !== null ? this.right.set() : 0;
    this.d = Math.max(leftD, rightD);
    if (Math.abs(leftD - rightD) > 1) res = false;
    return this.d + 1;
  };
  let res = true;
  root.set();
};
