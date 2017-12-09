/**
 * Take a function and return a function which accepts ars in reverse order
 *
 * @module reverse
 * @func
 * @since 1.1.0
 * @param {function} fn
 * @return {function}
 * @example
 *
 *     const foo = (a, b, c) => a + b - c;
 *     reverse(foo); //=> (c, b, a) => c + b - a;
 */

import define from './define';

const reverse = fn => define((...args) => fn(...args.reverse()), fn.length);

export default reverse;
