const S = '2-5g-3-J',
  k = 2
var licenseKeyFormatting = function (S, K) {
  // 通过正则将字符串中所有的'-'，去除
  S = S.replace(/-/g, '')
  // 定义str接受结果
  let str = ''
  // 定义m控制间隔
  let m = 0
  // !倒序for循环遍历字符串
  for (let i = S.length - 1; i >= 0; i--) {
    // 当m等于K时，在字符串str前面加上'-',将m重置为0
    if (m === K) {
      str = '-' + str
      m = 0
    }
    // m加1，字符串str等于当前元素加它本身
    m++
    str = S[i] + str
  }
  // 返回str的大写版本
  return str.toUpperCase()
}
licenseKeyFormatting(S, k)
