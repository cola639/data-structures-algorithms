const nums = [1, 3, 5, 6]
const target = 4

var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    console.log("mid", mid, nums[mid])
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      // 右区间
      console.log("右区间")
      left = mid + 1
    } else {
      // 左区间
      console.log("左区间")
      right = mid - 1
    }
  }

  return left
}

searchInsert(nums, target)
