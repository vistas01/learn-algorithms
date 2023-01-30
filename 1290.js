/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  return recursive(head, 0);
  function recursive(node, acc) {
    acc *= 2;
    console.log(!node.val);
    if (node.val !== undefined) acc += node.val;
    if (node.next === null) return acc;
    return recursive(node.next, acc);
  }
};
