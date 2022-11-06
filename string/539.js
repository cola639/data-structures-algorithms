// const timePoints = ['12:12', '00:13']
const timePoints = ['05:31', '22:08', '00:35']

var findMinDifference = function (timePoints) {
  let arr = []
  let minVal = 1441 // 0点到24点整24小时，每小时60分钟 24*60 = 1440; 分钟的差值肯定小于等于1440，故只要取1440以上的值就行
  // 遍历数组，并保存在一个新数组中，新数组是把时刻转化成分钟的数据值
  for (let i = 0, len = timePoints.length; i < len; i++) {
    let [hour, min] = timePoints[i].split(':')
    let val = hour * 60 + min * 1
    if (arr.includes(val)) {
      return 0
    }
    arr.push(val)
  }
  // 数组排序
  arr = arr.sort((a, b) => a - b)
  console.log('arr', arr)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < minVal) {
      minVal = arr[i] - arr[i - 1]
    }
  }
  // 比较数组头尾的边界值
  console.log(Math.min(minVal, 1440 - arr[arr.length - 1] + arr[0]))
  return Math.min(minVal, 1440 - arr[arr.length - 1] + arr[0])
}

findMinDifference(timePoints)
