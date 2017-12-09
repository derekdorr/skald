/**
 * Determine if value is less than or equal to other value
 *
 * @module lte
 * @func
 * @since 1.0.0
 * @param {number|string} a
 * @param {number|string} b
 * @return {function|boolean}
 * @example
 *
 *     lte(1, 1); //=> true
 *     lte('a')('b'); //=> true
 */

import define from './define';

const pre = (a, b) => a <= b;
const lte = define(pre);

export default lte;
