score = [5, 4, 3, 2, 1][
  ('Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5')
]

score = [10, 3, 8, 9, 4][
  ('Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4')
]

var find = function (arr) {
  const copy = [...arr]
  copy.sort((b, a) => b - a)

  const map = new Map()
  for (let i = 0; i < copy.length; i++) {
    map.set(copy[i], i + 1)
  }

  for (let j = 0; j < arr.length; j++) {
    if (map.get(arr[j]) === 1) {
      arr[j] = 'gold'
    } else if (map.get(arr[j]) === 2) {
      arr[j] = 'sliver'
    } else if (map.get(arr[j]) === 3) {
      arr[j] = 'bronze'
    } else {
      arr[j] = String(map.get(arr[j]))
    }
  }

  return arr
}

// var find = function (arr) {
//   const currentMax = Math.max(...arr)
//   let index = arr.findIndex((item) => item === currentMax)
//   arr[index] = 'Gold Medal'
//   arr.splice(index, 1)

//   index = arr.findIndex((item) => item === currentMax)
//   arr[index] = 'Silver Medal'
//   arr.splice(index, 1)

//   index = arr.findIndex((item) => item === currentMax)
//   arr[index] = 'Bronze Medal'

//   //   arr[index] =
//   //   i === 0 ? 'Gold Medal' : i === 1 ? 'Silver Medal' : 'Bronze Medal'

//   let res = []

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       const currentMax = Math.max(...arr)

//       let index = arr.findIndex((item) => item === currentMax)
//       arr.splice(index, 1)

//       res.push(index)
//       console.log(res)
//     }

//     arr[index] = String(arr[index])
//   }

//   for (let j = 0; j < res.length; j++) {
//     const insertStr =
//       j === 0 ? 'Gold Medal' : i === 1 ? 'Silver Medal' : 'Bronze Medal'
//     arr.splice(res[j], 0, insertStr)
//   }
// }
