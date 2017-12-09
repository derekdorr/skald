/**
 * Force args to array if not arrays
 *
 * @module toArray
 * @func
 * @since 1.0.0
 * @param {...*} args
 * @return {Array}
 * @example
 *
 *     toArray([1, 2]); //=> [1, 2]
 *     toArray(2, 3); //=> [2, 3]
 */

const toArray = (...args) => [].concat(...args).filter(val => val !== undefined);

export default toArray;
