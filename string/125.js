var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1
  const reg = /[a-z]|[A-Z]|[0-9]/

  while (left < right) {
    if (!reg.test(s[left])) {
      left++
    } else if (!reg.test(s[right])) {
      right--
    } else {
      if (s[left].toLowerCase() === s[right].toLowerCase()) {
        left++, right--
      } else {
        return false
      }
    }
  }

  return true
}

const str = 'A man, a plan, a canal: Panama'
console.log(isPalindrome(str))

let arr = [1, 2, 3, 4, 5]
function forTest(arr) {
  for (let i in arr) {
    console.log(arr[i])
    if (arr[i] === 3) {
      return
    }
  }
}
forTest(arr)
