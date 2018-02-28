/**
 * Execute function with array as arguments
 *
 * @module call
 * @func
 * @since 1.17.0
 * @param {function} fn
 * @param {Array} arr
 * @return {function}
 * @example
 *
 *     const foo = (a, b) => a + b;
 *     call(foo, [1, 2]) //=> 3
 *     call(foo)([2, 3]) //=> 5
 */

import define from './define';

const pre = (fn, arr) => fn(...arr);
const call = define(pre);

export default call;
