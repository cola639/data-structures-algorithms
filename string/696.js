const example = '00110011'

var countBinarySubstrings = function (s) {
  const counts = []
  let ptr = 0
  let n = s.length
  while (ptr < n) {
    const c = s.charAt(ptr)
    let count = 0
    while (ptr < n && s.charAt(ptr) === c) {
      ++ptr
      ++count
    }
    counts.push(count)
    console.log('🚀 >>> ~ countBinarySubstrings ~ counts', counts)
  }
  let ans = 0
  for (let i = 0; i < counts.length - 1; ++i) {
    console.log('🚀 >>> ~ countBinarySubstrings ~  i', counts[i])
    console.log('🚀 >>> ~ countBinarySubstrings ~  i+1', counts[i + 1])
    ans += Math.min(counts[i], counts[i + 1])
    console.log('🚀 >>> ~ countBinarySubstrings ~ ans', ans)
  }
  return ans
}

countBinarySubstrings(example)
