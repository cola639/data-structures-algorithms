var mySqrt = function (x) {
  let left = 0
  let right = x

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    console.log(left, right, mid)
    let res = mid * mid
    if (res > x) {
      // 左区间
      right = mid - 1
    } else if (res < x) {
      // 右区间
      left = mid + 1
    } else {
      return mid
    }
  }
  console.log(right)

  return right
}

mySqrt(8)
