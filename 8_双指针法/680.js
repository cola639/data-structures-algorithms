function validPalindrome(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      // 尝试删除左边的字符（即 i + 1，j），或者删除右边的字符（即 i，j - 1）
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
    }
  }
  return true
}

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
