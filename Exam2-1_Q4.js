/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
 	
 	let res = [];
 	if (intervals.length < 1) {
 		return res;
 	} else {
 		intervals.sort((a, b) => a[0] - b[0]);
 		let newIntervals = [];
 		newIntervals.push(intervals[0]);
 		for (let i = 1; i < intervals.length; i++) {
 			let nextInterval = intervals[i];
 			let currentInterval = newIntervals[newIntervals.length - 1];
 			if (nextInterval[0] <= currentInterval[1] && nextInterval[1] >=currentInterval[1]) {
 				currentInterval[1] = nextInterval[1];
 				newIntervals[newIntervals.length - 1] = currentInterval;
 			} else if (nextInterval[0] > currentInterval[1]) {
 				newIntervals.push(nextInterval);
 			}
 		}
 		return newIntervals;
 	}
 	
 };