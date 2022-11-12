/**
 * @param {string} s
 * @return {boolean}
 */

const s = '({[]}]'

var isValid = function (s) {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])
  const stk = []
  for (let ch of s) {
    if (pairs.has(ch)) {
      console.log('🚀TCL: >> has', pairs.has(ch))
      console.log('🚀TCL: >> get', pairs.get(ch))
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        console.log('🚀TCL: >> valid', stk.length - 1)
        return false
      }
      console.log('🚀TCL: >> pop >> ch', ch)
      stk.pop()
    } else {
      console.log('🚀TCL: >> push >> ch', ch)
      stk.push(ch)
    }
  }
  return !stk.length
}

isValid(s)
