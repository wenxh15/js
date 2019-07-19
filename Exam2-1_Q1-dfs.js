var array = [1, 2, [3, 4, [5, 6, 0]], 4, [3, 7], 0];
let result=flattern(array);
console.log(result);

function flattern(array) {
	let res=[];
	dfs(array,res);
	return res;
}

function dfs(arr1,res1) {
	for (let item of arr1) {
		if (Array.isArray(item)) {
			dfs(item,res1);
		}
		else {
			res1.push(item);
		}
	}
}
