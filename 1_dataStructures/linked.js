// 封装一个LinkNode类, 用于保存每个节点信息
class LinkNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
// 封装链表类
class LinkList {
  constructor() {
    this.head = null
    this.len = 0
  }
  // 1.向列表尾部添加一个新的项
  append(ele) {
    // 创建新节点
    let newnode = new LinkNode(ele)
    if (this.head == null) {
      this.head = newnode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newnode
    }
    this.len++
  }

  // 2.向列表的特定位置插入一个新的项
  insert(poistion, ele) {
    if (poistion < 0 || poistion > this.len || !Number.isInteger(poistion)) return false

    let newnode = new LinkNode(ele)
    let index = 0
    let current = this.head

    if (poistion == 0) {
      if (this.head == null) {
        this.head = newnode
      } else {
        newnode.next = this.head
        this.head = newnode
      }
      this.len++
    } else if (poistion == this.len) {
      this.append(ele)
    } else {
      while (index < poistion - 1) {
        current = current.next
        index++
      }
      newnode.next = current.next
      current.next = newnode
      this.len++
    }
    return true
  }

  // 3.移除指定位置的元素
  removeAt(poistion) {
    if (poistion < 0 || poistion > this.len - 1 || !Number.isInteger(poistion)) return false
    let index = 0
    let current = this.head
    if (poistion == 0) {
      this.head = this.head.next
    } else {
      while (index < poistion - 1) {
        current = current.next
        index++
      }
      current.next = current.next.next
    }
    this.len--
    return current.data
  }
  // 4.查找元素的位置
  indexOf(ele) {
    let index = 0
    let current = this.head
    while (current) {
      if (current.data == ele) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  // 5.remove(ele) 移除指定的元素
  remove(ele) {
    let index = this.indexOf(ele)
    this.removeAt(index)
  }
  // 6.toString()
  toString() {
    let index = 0
    let current = this.head
    let res = ''
    while (current) {
      res += ',' + current.data
      current = current.next
      index++
    }
    return res.slice(1)
  }
  // 7.判断栈中的元素是否为空
  isEmpty() {
    return this.len == 0
  }
  // 8.获取栈中元素的个数
  size() {
    return this.len
  }
  // 9.获取第一个节点
  getFirst() {
    return this.head.data
  }
}
