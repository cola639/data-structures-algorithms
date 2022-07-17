var countSegments = function (s) {
  const str = s.trim()
  const arr = str.split(' ')

  if (arr.length === 1) {
    if (!arr[0]) return 0
  }

  return arr.length
}

countSegments('                ')

/**
 * @param {string}
 * @return {number}
 */
// 思路:
// 1 判断边界情况全为空格
// 2 for...of... 判断当前字符 'a' 是否等于空格 前一个字符 'pre' 是否不等于空格

var countSegments = function (s) {
  if (s === false) return 0

  const str = s.trim()

  let pre
  let count = 0
  for (let a of str) {
    if (pre !== ' ' && a === ' ') {
      count++
    }
    pre = a
  }

  return count + 1
}
