class MinStack {
  constructor() {
    this.stack = [] // 主栈，用于存储所有元素
    this.minStack = [] // 辅助栈，用于存储每个元素插入时的最小值
  }

  push(val) {
    this.stack.push(val)
    // 为了获取堆栈中的最小元素
    // 如果辅助栈为空，或者新元素小于等于辅助栈顶元素，则同时将新元素推入辅助栈
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val)
    }
  }

  pop() {
    // 如果主栈顶元素等于辅助栈顶元素，同时弹出辅助栈顶元素
    if (this.stack.pop() === this.getMin()) {
      this.minStack.pop()
    }
  }

  top() {
    // 返回主栈顶元素
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    // 返回辅助栈顶元素，即当前栈中的最小元素
    return this.minStack[this.minStack.length - 1]
  }
}
