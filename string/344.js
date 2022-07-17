const s = ['h', 'e', 'l', 'l', 'o']

var reverseString = function (s) {
  let left = 0
  let right = s.length - 1
  for (; left < right; left++, right--) {
    s[left] = s[right]
    s[right] = s[left]
  }
}

reverseString(s)
