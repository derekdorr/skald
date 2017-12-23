/**
 * Filter elements in an array by function
 *
 * @module filterBy
 * @func
 * @since 1.9.0
 * @param {function} fn
 * @param {Array} arr
 * @return {function|Array}
 * @example
 *
 *     const foo = val => val < 3;
 *     filterBy(foo, [1, 2, 4]); //=> [1, 2]
 *     filterBy(foo)([2,3]); //=> [2]
 */

import _filter from './_internal/_filter';
import define from './define';

const internal = (fn, arr) => _filter(arr, fn);
const filterBy = define(internal);

export default filterBy;
