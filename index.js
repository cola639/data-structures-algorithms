var simplifyPath = function (path) {
  const stack = []
  path = path.split('/')

  for (let letter of path) {
      if (letter && letter != '.' && letter != '..') {
          stack.push(letter)
      }
      else if (letter === '..') {
          stack.pop(letter)
      }
  }

  return '/' + stack.join('/')
};