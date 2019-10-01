import test from 'ava';

const strings = require('../strings');

const capitalizeStr = 'framework for managing your configuration';
const expectedCapitalizedStr = 'Framework For Managing Your Configuration';

test('Testing Capitalize String', t => {
	t.deepEqual(expectedCapitalizedStr, strings.capitalize(capitalizeStr));
});

const reverseStr = 'orange';
const reverseStrExp = 'egnaro';

test('Testing string "orange" to reverse', t => {
	t.deepEqual(reverseStrExp, strings.reverse(reverseStr));
});

const strA = 'RAIL? SAFETY';
const strB = 'fairy tales';
const strC = 'Rafl fairt';

test('Testing Strings (A & B) Are Anagrams', t => {
	t.truthy(strings.anagrams(strA, strB));
});

test('Testing Strings (A & C) Ar\'nt Anagrams', t => {
	t.falsy(strings.anagrams(strA, strC));
});

const palindromeStr = 'abccba';
const palindromeStrN = 'lfreroug';

test('Testing That String "abccba" is palindrome', t => {
	t.truthy(strings.palindrome(palindromeStr));
});

test('Testing That String "lfreroug" is not palindrome', t => {
	t.falsy(strings.palindrome(palindromeStrN));
});

const vowelsTestStr = 'How do you do?';
const vowelsExpect = 5;

test('Testing how much vowels in string "How do you do?"', t => {
	t.is(vowelsExpect, strings.vowels(vowelsTestStr));
});
