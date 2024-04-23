/**
 * 拆成更小部分 每个部分互相独立!
 *  归并排序(array):
 *   如果 array 的长度小于或等于 1:返回 array
 *
 *    将 array 从中间分为左右两部分 left 和 right
 *    left = 归并排序(left)
 *    right = 归并排序(right)
 *
 *    返回 合并(left, right)
 *
 *合并(left, right):
 *    创建一个空数组 merged
 *    while left 和 right 都不为空:
 *        如果 left[0] < right[0]:
 *            将 left[0] 添加到 merged 并从 left 中移除它
 *       否则:
 *           将 right[0] 添加到 merged 并从 right 中移除它
 *   将剩余的 left 或 right 添加到 merged
 *   返回 merged
 *
 */
function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}
