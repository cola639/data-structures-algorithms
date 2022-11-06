/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const num1 = '11',
  num2 = '123'

var addStrings = function (num1, num2) {
  // Double pointer analog addition
  // lenLong lenShort
  let res = [],
    i = num1.length - 1,
    j = num2.length - 1
  let carry = 0
  while (i >= 0 || j >= 0 || carry != 0) {
    console.log('🚀 charAt(i) >', typeof num1.charAt(i), num1.charAt(i))
    console.log(
      '🚀 charAt(i)-0 >',
      typeof (num1.charAt(i) - '0'),
      num1.charAt(i) - '0'
    )
    let n1 = i >= 0 ? Number(num1.charAt(i)) : 0
    let n2 = j >= 0 ? Number(num1.charAt(j)) : 0
    let temp = n1 + n2 + carry

    res.push(temp % 10)
    carry = Math.floor(temp / 10)
    i--, j--
  }
  let ans = res.reverse().toString()
  return console.log('ans', ans)
}
addStrings(num1, num2)
