/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [nums.slice()];
    let copy = new Array(nums.length).fill(0);
    let i = 0;

  while (i < nums.length) {
    if (copy[i] < i) {
      let k = i % 2 && copy[i];
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      copy[i]++;
      i = 1;
      result.push(nums.slice());
    } else {
      copy[i] = 0;
      i++;
    }
  }
  return result;
};