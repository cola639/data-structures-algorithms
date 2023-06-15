const arr = [1, 3, 5, 4, 7]

var findLengthOfLCIS = function (nums) {
  let left = 0
  let current = 0
  let right = 1
  let len = 1

  while (right < nums.length) {
    if (nums[current] >= nums[right]) left = right
    len = Math.max(len, right - left + 1)
    current++
    right++
  }
  return len
}

findLengthOfLCIS(arr)
