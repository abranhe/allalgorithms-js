'use strict';

/*
 * Capitalize first letters in string
 *
 * @param str
 * @returns {string}
 */
function capitalize(str) {
  const words = [];

  for (const word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

module.exports = capitalize;
