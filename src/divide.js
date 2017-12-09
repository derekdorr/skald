/**
 * Divide two numbers
 * 
 * @func
 * @since 1.0.0
 * @param {number} a
 * @param {number} b
 * @return {number|function}
 * @example
 * 
 *     divide(9, 3); //=> 3
 *     divide(4)(2); //=> 2
 */

import define from './define';

const pre = (a, b) => a / b;
const divide = define(pre);

export default divide;
