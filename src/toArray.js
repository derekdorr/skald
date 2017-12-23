/**
 * Force args to array if not arrays
 *
 * @module toArray
 * @func
 * @since 1.0.0
 * @param {...*} args
 * @return {Array}
 * @example
 *
 *     toArray([1, 2]); //=> [1, 2]
 *     toArray(2, 3); //=> [2, 3]
 */

import { UNDEF } from 'permanent';
import _concat from './_internal/_concat';
import _filter from './_internal/_filter';
import notEquals from './notEquals';

const notEqualsUndefined = notEquals(UNDEF);

const toArray = (...args) => _filter(_concat([], ...args), notEqualsUndefined);

export default toArray;
