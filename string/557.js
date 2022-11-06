var reverseWords = function (s) {
  const ret = [] // new arr space
  const length = s.length
  let i = 0
  while (i < length) {
    // condition loop
    let start = i
    while (i < length && s.charAt(i) != ' ') {
      i++
    }
    // revert word
    for (let p = start; p < i; p++) {
      ret.push(s.charAt(start + i - 1 - p))
    }
    // space character need to be added
    while (i < length && s.charAt(i) == ' ') {
      i++
      ret.push(' ')
    }
  }
  // convert string to array
  return ret.join('')
}
