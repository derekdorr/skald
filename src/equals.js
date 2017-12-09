/**
 * Determine if two values are equal
 *
 * @func
 * @since 1.0.0
 * @param {*} a
 * @param {*} b
 * @return {boolean|function}
 * @example
 *
 *     equals(1, 1); //=> true
 *     equals(1)(2); //=> false
 */

import define from './define';

const pre = (a, b) => a === b;
const equals = define(pre);

export default equals;
