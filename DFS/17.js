const digits = '23'
//输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

var letterCombinations = (digits) => {
  if (digits.length == 0) return [] // 输入1的情况
  const res = []
  const map = {
    //建立电话号码和字母的映射关系
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const dfs = (curStr, i) => {
    //curStr是递归每一层的字符串，i是扫描的指针
    if (i > digits.length - 1) {
      //边界条件，递归的出口
      res.push(curStr) //其中一个分支的解推入res
      return //结束递归分支，进入另一个分支
    }
    const letters = map[digits[i]] //取出数字对应的字母
    for (const l of letters) {
      //进入不同字母的分支
      dfs(curStr + l, i + 1) //参数传入新的字符串，i右移，继续递归
    }
  }
  dfs('', 0) // 递归入口，传入空字符串，i初始为0的位置
  return res
}
letterCombinations(digits)
