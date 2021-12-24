/**
 题目: 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

 */

/**
 输出要求:找出所有出现两次的元素
 
 提示信息和条件限制:  提示信息：1 ≤ a[i] ≤ n   条件限制 ：不用到任何额外空间并在O(n)时间复杂度内

 思路: 2021/12/24  
      创建一个装载的res 数组[] hint:输出数组不计入额外空间,  
      长度循环,  取绝对值减1， 
      若num[inx] > 0 原数组对应的元素取相反值， 否则num[inx] < 0 将 inx+1 变回原来的值  
 */

function findDuplicates(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const inx = Math.abs(nums[i]) - 1;
    if (nums[inx] > 0) {
      nums[inx] = -nums[inx];
      console.log(nums[inx]);
      console.log("nums:" + nums);
      console.log("----------------------------");
    } else {
      res.push(inx + 1);
      console.log("res:" + res);
      console.log("----------------------------");
    }
  }
  return res;
}

const array = [1, 5, 3, 3, 4, 5];
findDuplicates(array);
