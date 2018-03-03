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
import INT_TWO from './_constants/INT_TWO';
import reverse from './reverse';

const filterBy = reverse(_filter, INT_TWO);

export default filterBy;
