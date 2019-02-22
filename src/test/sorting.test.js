import test from 'ava';

const sorting = require('../sorting');

const array = [4, 2, 5, 1, 7];
const expected = [1, 2, 4, 5, 7];

test('Testing Bubble Sort', t => {
	t.deepEqual(expected, sorting.bubbleSort(array));
});

test('Testing Merge Sort', t => {
	t.deepEqual(expected, sorting.mergeSort(array));
});

test('Testing Bogo Sort', t => {
	t.deepEqual(expected, sorting.bogoSort(array));
});

