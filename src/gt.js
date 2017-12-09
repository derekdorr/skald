/**
 * @module gt
 * Determine if first value is greater than
 *
 * @func
 * @since 1.0.0
 * @param {number|string} a
 * @param {number|string} b
 * @return {function|boolean}
 * @example
 *
 *     gt(2, 1); //=> true
 *     gt('b')('c'); //=> false
 */

import define from './define';

const pre = (a, b) => a > b;
const gt = define(pre);

export default gt;
