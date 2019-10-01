const Comparator = require('../helpers/comparator');

/**
 * Returns true if the given array is ascending sorted otherwise false.
 */
const isSorted = (a, comparator) => {
  for (let i = 0; i < a.size - 1; i++) {
    if (comparator.gt(a[i], a[i + 1])) {
      return false;
    }
  }

  return true;
};

/**
 * Returns a random integer between 0 and n - 1
 */
const randInt = n => Math.floor(Math.random() * n);

/**
 * BogoSort: bogo-sort (stupid-sort) algorithm for a given array 'a'.
 */
const bogoSort = (arr, compareFtn) => {
  const comparator = new Comparator(compareFtn);

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
