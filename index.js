var sortList = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  let slow = head
  let fast = head.next

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let temp = slow.next
  slow.next = null // 切断

  // 递归
  let left = sortList(head)
  let right = sortList(temp)

  // 归并
  let dummyHead = new ListNode(0)
  let merge = dummyHead
  while (left !== null && right !== null) {
    if (left.val > right.val) {
      merge.next = right
      right = right.next
    } else {
      merge.next = left
      left = left.next
    }
    merge = merge.next
  }

  merge.next = left !== null ? left : right
  return dummyHead.next
}
