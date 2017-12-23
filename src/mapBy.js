/**
 * Map elements in an array by function
 *
 * @module mapBy
 * @func
 * @since 1.9.0
 * @param {function} fn
 * @param {Array} arr
 * @return {function|Array}
 * @example
 *
 *     const foo = val => val + 1;
 *     mapBy(foo, [1, 2]); //=> [2, 3]
 *     mapBy(foo)([4, 5]); //=> [5, 6]
 */

import _map from './_internal/_map';
import define from './define';

const internal = (fn, arr) => _map(arr, fn);
const mapBy = define(internal);

export default mapBy;
