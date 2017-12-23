/**
 * Reduce array to new value by function
 *
 * @module reduceBy
 * @func
 * @since 1.9.0
 * @param {function} fn
 * @param {*} accumulator
 * @param {Array} arr
 * @return {function|*}
 * @example
 *
 *     const foo = (acc, val) = acc + val;
 *     reduceBy(foo, 1, [1, 1]); //=> 3
 *     reduceBy(foo, 2)([2, 2]); //=> 6
 *     reduceBy(foo)(3)([3, 3]); //=> 9
 */

import _reduce from './_internal/_reduce';
import define from './define';

const internal = (fn, accumulator, arr) => _reduce(arr, fn, accumulator);
const reduce = define(internal);

export default reduce;
