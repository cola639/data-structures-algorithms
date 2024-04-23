/*
 * 拆成更小部分 但存在依赖部分
 * 斐波那契(n):
 *     如果 n 等于 0 或 1:
 *         返回 n
 *
 *     创建一个数组 fib[0...n]
 *    fib[0] = 0
 *   fib[1] = 1
 *
 *    对于 i 从 2 到 n:
 *        fib[i] = fib[i-1] + fib[i-2]
 *
 *    返回 fib[n]
 */

function fib(n) {
  if (n === 0 || n === 1) {
    return n
  }

  let fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib[n]
}
