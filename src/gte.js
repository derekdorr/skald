/**
 * Determine if value is greater than or equal to other value
 *
 * @module gte
 * @func
 * @since 1.0.0
 * @param {number|string} a
 * @param {number|string} b
 * @return {function|boolean}
 * @example
 *
 *     gte(1, 1); //=> true
 *     gte('b')('a'); //=> true
 */

import define from './define';

const pre = (a, b) => a >= b;
const gte = define(pre);

export default gte;
