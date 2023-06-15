class LinkList {
  constructor() {
    this.length = 0
    this.head = null // 可以用作链表是否为空的判断
  }
  getPosition(position) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current.next
    }
    return current
  }

  append(element) {
    let node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.getPosition(this.length - 1)
      current.next = node
    }
    this.length++
  }

  insert(position, element) {
    if (position < 0 || position > this.length) return false
    let node = new Node(element)
    if (position === 0) {
      node.next = this.head
      this.head = node
    } else {
      let previous = this.getPosition(position - 1)
      node.next = previous.next
      previous.next = node
    }

    this.length++
    return true
  }

  removeAt(position) {
    if (position < 0 || position > this.length) return false
    let current = this.head
    if (position === 0) {
      this.head = current.next
    } else {
      let previous = this.getPosition(position - 1)
      current = previous.next
      previous.next = current.next
    }
    this.length--
    return current.element
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.length; i++) {
      if (current.element === element) return i
      current = current.next
    }

    return -1
  }
}

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
