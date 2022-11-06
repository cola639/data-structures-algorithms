var groupAnagrams = function (strs) {
  const map = new Map()
  for (let str of strs) {
    let array = Array.from(str) // 变成数组

    let key = array.sort().toString() // 对数组数组排序后再换回字符串
    let list = map.get(key) ? map.get(key) : new Array() // 判断是否在map里面 否则生成新array
    list.push(str)
    map.set(key, list) // 设置map 键值对
  }
  return Array.from(map.values())
}

var groupAnagrams = function (strs) {
  const map = new Map()
  for (let s of strs) {
    let arr = Array.from(s)
    let key = arr.sort().toString()
    let list = map.get(key) ? map.get(key) : new Array()
    list.push(s)
    map.set(key, list)
  }
  return Array.from(map.values())
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
let res = groupAnagrams(strs)
console.log(JSON.stringify(res))
