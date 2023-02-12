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
  return res;
};
//ChatGPT
// var isBalanced = function (root) {
//   if (!root) return true;
//   let leftHeight = getHeight(root.left);
//   let rightHeight = getHeight(root.right);
//   return (
//     Math.abs(leftHeight - rightHeight) <= 1 &&
//     isBalanced(root.left) &&
//     isBalanced(root.right)
//   );
// };

// function getHeight(node) {
//   if (!node) return 0;
//   return 1 + Math.max(getHeight(node.left), getHeight(node.right));
// }
var isBalanced = function (root) {
  return height(root) !== -1;
};

var height = function (root) {
  if (!root) return 0;

  let left = height(root.left);
  let right = height(root.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
};
