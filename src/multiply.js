/**
 * @module multiply
 * Multiply two numbers together
 *
 * @func
 * @since 1.0.0
 * @param {number} a
 * @param {number} b
 * @return {function|number}
 * @example
 *
 *     multiply(2, 3); //=> 6
 *     multiply(2)(2); //=> 4
 */

import define from './define';

const pre = (a, b) => a * b;
const multiply = define(pre);

export default multiply;
