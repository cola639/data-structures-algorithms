// 先序遍历的第一个元素是树的根节点。
// 在中序遍历中找到根节点，这会将树分成左子树和右子树。
// 对左子树和右子树递归执行以上步骤。

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

var buildTree = function (preorder, inorder) {
  // 用于快速查找中序遍历中根节点的索引
  let map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  return arrayToTree(0, preorder.length - 1, 0, inorder.length - 1)
}

function arrayToTree(preStart, preEnd, inStart, inEnd) {
  if (preStart > preEnd || inStart > inEnd) return null // 递归终止条件

  let rootVal = preorder[preStart] // 先序遍历的第一个元素是根节点
  let root = new TreeNode(rootVal) // 创建根节点
  let mid = map.get(rootVal) // 找到根节点在中序遍历中的索引
  let leftTreeSize = mid - inStart // 计算左子树的大小

  // 递归构造左子树和右子树
  root.left = arrayToTree(
    preStart + 1,
    preStart + leftTreeSize,
    inStart,
    mid - 1
  )
  root.right = arrayToTree(preStart + leftTreeSize + 1, preEnd, mid + 1, inEnd)

  return root
}
