/**
 * Add two numbers
 *
 * @module add
 * @func
 * @since 1.0.0
 * @param {number} a
 * @param {number} b
 * @return {number}
 * @example
 *
 *     add(1,2); //=> 3
 *     add(2)(3); //=> 5
 */

import define from './define';

const pre = (a, b) => a + b;
const add = define(pre);

export default add;
