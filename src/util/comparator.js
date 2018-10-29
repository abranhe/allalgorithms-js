/**
 * The All ▲lgorithms Project
 * https://allalgorithms.com
 *
 * @param { Function } compareFunction
 */

class Comparator {
	constructor(compareFunction) {
		if (compareFunction) {
			this.compare = compareFunction;
		}
	}

	compare(a, b) {
		if (a === b) {
			return 0;
		}
		return a < b ? -1 : 1;
	}

	equal(a, b) {
		return this.compare(a, b) === 0;
	}

	greaterThan(a, b) {
		return this.compare(a, b) > 0;
	}

	greaterThanOrEqual(a, b) {
		return this.greaterThan(a, b) || this.equal(a, b);
	}

	lessThan(a, b) {
		return this.compare(a, b) < 0;
	}

	lessThanOrEqual(a, b) {
		return this.lessThan(a, b) || this.equal(a, b);
	}

	reverse() {
		const originalCompareFn = this.compare;
		this.compare = (a, b) => originalCompareFn(b, a);
	}
}

module.exports = Comparator;
