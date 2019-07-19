/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
 	let arr = [];
 	if (nums.length < 3) {
 		return [];
 	}

 	nums = nums.sort((a,b) => a - b);

 	for (let i = 0; i < nums.length - 2;i++){
 		if (i > 0 && nums[i] ===nums[i - 1]) continue;
 		for (let j = i + 1, k = nums.length - 1; j < k;){
 			if ((0 - nums[i]) === (nums[j] + nums[k])){
 				let res = [];
 				res.push(nums[i]);
 				res.push(nums[j]);
 				res.push(nums[k]);
                arr.push(res);
                for (;j < k && nums[j] === nums [j + 1];){
                	j++;
                }
                for (;j < k && nums[k] === nums [k - 1];){
                	k--;
                }
                j++;
                k--;
            }
            else if (0 - nums[i] < nums[j] + nums[k]){
            	k--;
            }
            else {
            	j++;
            }
        }
    }
    return arr;
};