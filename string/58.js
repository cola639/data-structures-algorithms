// const s = 'Hello World'
const s = 'a'
var lengthOfLastWord = function (s) {
  let endIndex = s.length - 1

  while (s[endIndex] === ' ') endIndex--

  let startIndex = endIndex
  return endIndex - startIndex
}

lengthOfLastWord(s)
