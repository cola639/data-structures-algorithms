// numCourses = 2
// prerequisites = [[1,0],[0,1]]

var canFinish = function (numCourses, prerequisites) {
  const adjacency = Array.from({ length: numCourses }, () => [])
  const flags = new Array(numCourses).fill(0)

  // 构建邻接表
  for (let [cur, pre] of prerequisites) {
    adjacency[pre].push(cur) //  [[1],[0]]
  }
  console.log("🚀 >> canFinish >> adjacency:", JSON.stringify(adjacency))

  // 尝试访问每个节点
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i, adjacency, flags)) return false
  }
  return true
}

// 抽离的 dfs 函数
function dfs(i, adjacency, flags) {
  console.log("执行")
  if (flags[i] === -1) return true // 已经访问过，且无环
  if (flags[i] === 1) return false // 正在访问中，发现环
  flags[i] = 1 // 标记为正在访问
  console.log("flags", flags)
  for (let j of adjacency[i]) {
    if (!dfs(j, adjacency, flags)) return false // 深度优先搜索
  }
  flags[i] = -1 // 标记为访问结束，无环
  return true
}

// prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]] numCourses = 4
canFinish(2, [
  [1, 0],
  [0, 1],
])
