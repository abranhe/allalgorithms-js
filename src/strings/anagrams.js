'use strict';

/*
 * Check if 2 strings are anagrams
 *
 * @param stringA
 * @param stringB
 * @returns {boolean}
 */
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

/*
 * HELPER function
 * @param str
 * @returns {string}
 */
function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;
