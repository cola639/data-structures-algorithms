/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let res = t
  for (let i = 0; i < s.length; i++) {
    res = res.replace(s[i], "")
  }

  return res ? true : false
}

const s = "rat"
const t = "car"
isAnagram(s, t)
