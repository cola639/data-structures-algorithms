/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let res = t
  for (let i = 0; i < s.length; i++) {
    res = res.replace(s[i], '')
  }

  return res ? true : false
}

const s = 'rat'
const t = 'car'
isAnagram(s, t)

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

s = "anagram", t = "nagaram"

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false; // 如果两个字符串长度不相等，它们不是异位词
  }

  const sObj = {};
  const tObj = {};
  
  for (let item of s) {
      sObj[item] = (sObj[item] || 0) + 1;
  }

  for (let item of t) {
      tObj[item] = (tObj[item] || 0) + 1;
  }

  // 检查sObj和tObj是否相等
  for (let key in sObj) {
      if (sObj[key] !== tObj[key]) {
          return false;
      }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
