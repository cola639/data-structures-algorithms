const example = 'LDRRLRUULR'

var judgeCircle = function (moves) {
  const map = new Map()
  map.set('U', 0)
  map.set('R', 0)
  map.set('D', 0)
  map.set('L', 0)

  for (let m of moves) {
    if (m === 'U') {
      map.set('U', map.get('U') + 1)
    } else if (m === 'R') {
      map.set('R', map.get('R') + 1)
    } else if (m === 'D') {
      map.set('D', map.get('D') + 1)
    } else if (m === 'L') {
      map.set('L', map.get('L') + 1)
    }
  }
  console.log(map)
  let Xcounts = map.get('U') - map.get('D')
  let Ycounts = map.get('R') - map.get('L')
  return Xcounts === 0 && Ycounts === 0 ? true : false
}

console.log(judgeCircle(example))
