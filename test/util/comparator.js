import test from 'ava';
import { Comparator } from '../../src/helpers';

test('Test for comparator', t => {
  const c = new Comparator();
  t.is(c.compare(0, 0), 0);
  t.is(c.compare(0, 1), -1);
  t.is(c.compare(1, 0), 1);
  t.is(c.compare('a', 'b'), -1);
  t.true(c.lt(0, 1));
  t.false(c.lt(1, 1));
  t.true(c.lte(1, 1));
  t.true(c.lte(0, 1));
  t.false(c.lte(1, 0));
  t.true(c.gt(1, 0));
  t.false(c.gt(1, 1));
  t.true(c.gte(1, 1));
  t.true(c.gte(1, 0));
  t.false(c.gte(0, 1));
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
  t.false(c.lt(0, 1));
  t.false(c.lt(1, 1));
  t.true(c.lte(1, 1));
  t.false(c.lte(0, 1));
  t.true(c.lte(1, 0));
  t.false(c.gt(1, 0));
  t.false(c.gt(1, 1));
  t.true(c.gte(1, 1));
  t.false(c.gte(1, 0));
  t.true(c.gte(0, 1));
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
  t.false(c.lt(0, 1));
  t.false(c.lt(1, 1));
  t.true(c.lte(1, 1));
  t.true(c.lte(0, 1));
  t.true(c.lte(1, 0));
  t.false(c.gt(1, 0));
  t.false(c.gt(1, 1));
  t.true(c.gte(1, 1));
  t.true(c.gte(1, 0));
  t.true(c.gte(0, 1));
  t.true(c.equal(0, 0));
  t.true(c.equal(0, 1));
});
