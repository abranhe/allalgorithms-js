const Comparator = require('../util/comparator.js');

const bubbleSort = (a, comparatorFunction) => {
	const comparator = new Comparator(comparatorFunction);
	const n = a.length;
	let bound = n - 1;
	let check = false;

	for (let i = 0; i < n - 1; i++) {
		let newbound = 0;
		for (let j = 0; j < bound; j++) {
			if (comparator.greaterThan(a[j], a[j + 1])) {
				const tmp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = tmp;
				newbound = j;
				check = true;
			}
		}
		if (!check) {
			return a;
		}
		bound = newbound;
	}
	return a;
};

module.exports = bubbleSort;
