/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let len = findLength(head, 0);
  return findIndex(head, Math.floor((len - 1) / 2) + 1, 0);
  function findLength(node, idx) {
    if (node.next === null) return idx;
    return findLength(node.next, idx + 1);
  }
  function findIndex(node, idx, count) {
    console.log(node, idx, count);
    if (count === idx) return node;
    return findIndex(node.next, idx, count + 1);
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  var middle = head;
  var end = head;

  while (end) {
    if (!end.next) break;
    end = end.next.next;
    middle = middle.next;
  }

  return middle;
};
