'use strict';

/*
 *  Check how much vowels are in string
 * @param str
 * @returns {number}
 */
function vowels(str) {
  const checker = ['a', 'e', 'i', 'o', 'u'];

  return str
    .toLowerCase()
    .split('')
    .reduce((acc, c) => {
      return checker.includes(c) ? acc + 1 : acc;
    }, 0);
}

module.exports = vowels;
