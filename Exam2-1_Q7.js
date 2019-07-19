/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var find132pattern = function(nums) {
	//want to find subsequence (s1,s3,s2)
	let s2 = Number.MIN_SAFE_INTEGER;
	let stack = [];
	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] < s2) {
			return true;
		} 
		while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
			s2 = stack.pop();
		}
		stack.push(nums[i]);
	}
	return false; 
};