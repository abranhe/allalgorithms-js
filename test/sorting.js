import test from 'ava';
import { mergesort, bubblesort, bogosort } from '../src';

const array = [4, 2, 5, 1, 7];
const expected = [1, 2, 4, 5, 7];

test('Testing Bubblesort', t => {
  t.deepEqual(expected, bubblesort(array));
});

test('Testing Mergesort', t => {
  t.deepEqual(expected, mergesort(array));
});

test('Testing Bogosort', t => {
  t.deepEqual(expected, bogosort(array));
});
