// 计数方法统计差异

// 以数组形式记录0-9数字次数
// 当数字+位置一样 累加bulls
// guess出现-- secret出现++ 并累及cows值
// guess-- secret++

var getHint = function (secret, guess) {
  let bull = 0,
    cows = 0
  const count = new Arrary(10).fill(0)

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bull++
    } else {
      if (count[secret[i]] < 0) cows++
      if (count[guess[i]] > 0) cows++

      count[secret[i]]++
      count[guess[i]]--
    }
  }

  return `${bull}A${cows}B`
}
