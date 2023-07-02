// const arr = [2, 3]

var guess = (n) => {
  if (n === 3) return 0
  if (n < 3) return -1
  if (n > 3) return 1
}

var guessNumber = function () {
  let left = 2
  let right = 3

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    console.log("mid", mid)
    // 猜的数字大于答案
    if (guess(mid) === 1) {
      left = mid + 1
      console.log("left = mid", left)
      // 猜的数字小于答案
    } else if (guess(mid) === -1) {
      right = mid - 1
      console.log("right = mid", right)
      // 猜的数字是答案
    } else if (guess(mid) === 0) {
      console.log(" return >> mid:", mid)
      return mid
    }
  }
}

guessNumber()
