import test from 'ava';
import { palindrome } from '../src';

const str = 'Borrow or rob?';

test('Testing Palindrome', t => {
  t.true(palindrome(str));
});
