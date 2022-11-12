class Queue {
  items = []

  constructor() {}
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    let r = qitems.shift()
    return r
  }
  callQueue() {
    console.log('start callBack', this.items)
    this.items.forEach((eachFn) => eachFn())
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length == 0
  }
  size() {
    return this.items.length
  }
  print() {
    console.log(this.items.toString())
  }
}

module.exports = Queue
