'use strict';

/*
 * Returns true if string is palindrome
 *
 * @param str
 * @returns {boolean}
 */
function palindrome(str) {
  return str.split('').every((c, i) => {
    return c === str[str.length - 1 - i];
  });
}

module.exports = palindrome;
