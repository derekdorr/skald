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

import _call from './_internal/_call';
import define from './define';

const call = define(_call, 2);

export default call;
