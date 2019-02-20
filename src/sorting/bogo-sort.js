const Comparator = require('../util/comparator');

/* HELPER-FUNCTION
   IsSort : checks whether the given array is sorted (ascending)
   Returns true if the given array is ascending sorted otherwise false
*/
const isSorted = (a, comparator) => {
	for (let i = 0; i < a.size - 1; i++) {
		if (comparator.greaterThan(a[i], a[i + 1])) {
			return false;
		}
	}
	return true;
};

/*
    HELPER-FUNCTION
    RandInt : returns a random integer between 0 and N-1
*/
const randInt = N => {
	return Math.floor(Math.random() * N);
};

/*
    BogoSort: bogo-sort (stupid-sort) algorithm for a given array 'a'
*/
const bogoSort = (arr, compareFunction) => {
	const comparator = new Comparator(compareFunction);

	while (!isSorted(arr, comparator)) {
		const a = randInt(arr.size);
		const b = randInt(arr.size);

		const tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	}
	return arr;
};

module.exports = bogoSort;

