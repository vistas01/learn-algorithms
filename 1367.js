/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  function traverse(node, list) {
    if (!node) return false;
    if (list.val === node.val) {
      if (!list.next) return true;
      return traverse(node.left, list.next) || traverse(node.right, list.next);
    }
    return traverse(node.left, list) || traverse(node.right, list);
  }
  return traverse(root, head);
};