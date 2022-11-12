/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const head = [1, 2, 6, 3, 4, 5, 6]
const val = 6
var removeElements = function (head, val) {
  if (head == null) return null
  head.next = removeElements(head.next, val)
  return head.val == val ? head.next : head
}

console.log(removeElements(head, val))
