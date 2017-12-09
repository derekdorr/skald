/**
 * Subtract one number from another
 *
 * @func
 * @since 1.0.0
 * @param {number} a
 * @param {number} b
 * @return {function|boolean}
 * @example
 *
 *     subtract(3, 2); //=> 1
 *     subtract(2)(1); //=> 1
 */

import define from './define';

const pre = (a, b) => a - b;
const subtract = define(pre);

export default subtract;
