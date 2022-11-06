/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const s = 'abcd',
  t = 'abcde'

var findTheDifference = function (s, t) {
  // t - s
  let res = t

  for (let i = 0; i < s.length; i++) {
    console.log(res)
    res = res.replace(s[i])
  }
  return res
}

findTheDifference(s, t)
