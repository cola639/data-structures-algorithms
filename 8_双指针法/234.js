const head = [1, 2, 2, 1]

var isPalindrome = function (head) {
  let q, newHead
  let slow = head
  let fast = head

  while (fast && fast.next) {
    q = slow // 准备开始下一次翻转，先记录准备要翻转的结点
    slow = slow.next
    fast = fast.next.next
    q.next = newHead // 要翻转的新结点记录过来
    newHead = q // 赋值
  }

  // 如果上个循环 fast.next.next 还在链表内，说明是奇数，不清楚的可以画图，一下子豁然开朗
  if (fast) slow = slow.next // 奇数的话，前半部分 比 后半部分少一个，所以后半部分的 slow 指针要先往后指一位，才能开始下面的遍历

  while (slow && newHead) {
    // 不同直接返回
    if (slow.val !== newHead.val) return false

    slow = slow.next
    newHead = newHead.next
  }
  return true
}

isPalindrome(head)
