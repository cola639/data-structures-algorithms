/**
 * 使用对象模拟栈功能
 */
function Stack() {
  this._size = 0
  this.values = {}
}

Stack.prototype.push = function (data) {
  const size = ++this._size
  this.values[size] = data
}

Stack.prototype.pop = function () {
  const size = this._size
  let deletedData = undefined

  if (size) {
    deletedData = this.values[size]

    delete this.values[size]
    this._size--

    return deletedData
  }
}

// 创建一个新的Stack对象
let stack = new Stack()

// 使用push方法添加元素
stack.push("First")
stack.push("Second")
stack.push("Third")

console.log(stack.values)
// 现在，栈看起来应该是这样的：["First", "Second", "Third"]

// 使用pop方法移除并获取栈顶元素
let item = stack.pop() // item现在是"Third"

console.log(stack.values)
// 现在，栈看起来应该是这样的：["First", "Second"]
