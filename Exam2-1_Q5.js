/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {

 	let max = 0;
 	let sum = 0;
 	for (let i = 0; i < nums.length; i++) {
 		if (nums[i] == 0) {
 			nums[i] = -1;
 		}
 	}
 	let map = new Map();
 	map.set(0, -1);
 	for (let j = 0; j < nums.length; j++) {
 		sum += nums[j];
 		if (map.has(sum)) {
 			max = Math.max(max, j - map.get(sum));
 		} else {
 			map.set(sum,j);
 		}
 	}
 	
 	return max;
 };