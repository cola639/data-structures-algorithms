class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

// 创建节点
let root = new TreeNode(1)
let node1 = new TreeNode(2)
let node2 = new TreeNode(3)
let node3 = new TreeNode(4)
let node4 = new TreeNode(5)
let node5 = new TreeNode(6)
let node6 = new TreeNode(7)

// 构建树
root.left = node1
root.right = node2

node1.left = node3
node1.right = node4

node2.left = node5
node2.right = node6

console.log("root", JSON.stringify(root))
