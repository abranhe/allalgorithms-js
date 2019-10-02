'use strict';

/*
 * Returns true if string is palindrome
 *
 * @param str
 * @returns {boolean}
 */
function palindrome(str) {
  const reggex = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(reggex, '');
  const size = str.length;

  for (let i = 0; i < size / 2; i++) {
    if (str[i] !== str[size - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = palindrome;
