/**
 * Returns an array of passed arguments
 *
 * @module args
 * @func
 * @since 1.16.0
 * @param {...*} vals
 * @return {Array}
 * @example
 *
 *     args(1, 2, [3, 4]); //=> [1, 2, [3, 4]]
 */

const args = (...vals) => vals;

export default args;
