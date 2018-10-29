import test from 'ava';

const Comparator = require('../../util/comparator');

test('Test for comparator', t => {
	const c = new Comparator();
	t.is(c.compare(0, 0), 0);
	t.is(c.compare(0, 1), -1);
	t.is(c.compare(1, 0), 1);
	t.is(c.compare('a', 'b'), -1);
	t.true(c.lessThan(0, 1));
	t.false(c.lessThan(1, 1));
	t.true(c.lessThanOrEqual(1, 1));
	t.true(c.lessThanOrEqual(0, 1));
	t.false(c.lessThanOrEqual(1, 0));
	t.true(c.greaterThan(1, 0));
	t.false(c.greaterThan(1, 1));
	t.true(c.greaterThanOrEqual(1, 1));
	t.true(c.greaterThanOrEqual(1, 0));
	t.false(c.greaterThanOrEqual(0, 1));
	t.true(c.equal(0, 0));
	t.false(c.equal(0, 1));
});

test('Test for reverse function from comparator', t => {
	const c = new Comparator();
	c.reverse();
	t.is(c.compare(0, 0), 0);
	t.not(c.compare(0, 1), -1);
	t.not(c.compare(1, 0), 1);
	t.not(c.compare('a', 'b'), -1);
	t.false(c.lessThan(0, 1));
	t.false(c.lessThan(1, 1));
	t.true(c.lessThanOrEqual(1, 1));
	t.false(c.lessThanOrEqual(0, 1));
	t.true(c.lessThanOrEqual(1, 0));
	t.false(c.greaterThan(1, 0));
	t.false(c.greaterThan(1, 1));
	t.true(c.greaterThanOrEqual(1, 1));
	t.false(c.greaterThanOrEqual(1, 0));
	t.true(c.greaterThanOrEqual(0, 1));
	t.true(c.equal(0, 0));
	t.false(c.equal(0, 1));
});

test('Test for compareFunction from comparator', t => {
	const compareFunction = () => 0;
	const c = new Comparator(compareFunction);
	t.is(c.compare(0, 0), 0);
	t.not(c.compare(0, 1), -1);
	t.not(c.compare(1, 0), 1);
	t.not(c.compare('a', 'b'), -1);
	t.false(c.lessThan(0, 1));
	t.false(c.lessThan(1, 1));
	t.true(c.lessThanOrEqual(1, 1));
	t.true(c.lessThanOrEqual(0, 1));
	t.true(c.lessThanOrEqual(1, 0));
	t.false(c.greaterThan(1, 0));
	t.false(c.greaterThan(1, 1));
	t.true(c.greaterThanOrEqual(1, 1));
	t.true(c.greaterThanOrEqual(1, 0));
	t.true(c.greaterThanOrEqual(0, 1));
	t.true(c.equal(0, 0));
	t.true(c.equal(0, 1));
});
