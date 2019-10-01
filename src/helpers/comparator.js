/**
 * Object comparator class, if the comparison fuction is not
 * passed in the contructor it will use the default compare
 * values.
 *
 * Equals (==)
 * Less than (<)
 * Greater than (> )
 */
class Comparator {
  constructor(compareFtn) {
    if (compareFtn) {
      this.compare = compareFtn;
    }
  }

  /**
   * Compare two values. Returns 0 if the values are equal.
   * Returns 1 if a is greater than b and returns -1
   * if b is greater than a.
   *
   * @param {Object} a some value
   * @param {Object} b some other value
   */
  compare(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Returns true if the two values are equals.
   *
   * @example
   * ```
   * equal(3, 3);
   * // => true
   * ```
   *
   * @param {Object} a some value
   * @param {Object} b some other value
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * Returns true if a is greather than b.
   *
   * @example
   * ```
   * gte(7, 3);
   * // => true
   * ```
   *
   * @param {*} a some value
   * @param {*} b some other value
   */
  gt(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * Returns true if a is greather than equal to b.
   *
   * @example
   * ```
   * gte(7, 3);
   * // => true
   * gte(3, 3);
   * // => true
   * ```
   *
   * @param {*} a some value
   * @param {*} b some other value
   */
  gte(a, b) {
    return this.gt(a, b) || this.equal(a, b);
  }

  /**
   * Returns true if a is less than b.
   *
   * @example
   * ```
   * * lt(7, 3);
   * // => false
   * ```
   *
   * @param {*} a some value
   * @param {*} b some other value
   */
  lt(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * Returns true if a is less than equal to b.
   *
   * @example
   * ```
   * lte(7, 3);
   * // => false
   * lte(3, 3);
   * // => true
   * ```
   *
   * @param {*} a some value
   * @param {*} b some other value
   */
  lte(a, b) {
    return this.lt(a, b) || this.equal(a, b);
  }

  /**
   * Reverse compararision function.
   *
   * @example
   * ```
   * this.equal(3, 3); // => true
   * this.reverse();
   * this.equal(3, 3); // => false
   * ```
   */
  reverse() {
    const originalCompareFn = this.compare;
    this.compare = (a, b) => originalCompareFn(b, a);
  }
}

module.exports = Comparator;
