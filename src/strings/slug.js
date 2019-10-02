'use strict';

/*
 * Sluglify string
 *
 * @param str
 * @returns {string}
 */
function slug(str) {
  return str
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'');
}

module.exports = slug;
