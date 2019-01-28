'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	
	const arrLength = array.length;
	if (arrLength === 0) return false;
	const midPoint = Math.floor(arrLength / 2);
	if (target <= array[midPoint]) {
		for (let i = midPoint; i >= 0; i--) {
			if (target === array[i]) {
				return true;
			}
		}
	}
	else {
		for (let j = midPoint + 1; j < arrLength ; j++) {
			if (target === array[j]) {
				return true;
			}
		}
	}
	return false;
};
	


/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch