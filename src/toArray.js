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

import _concat from './_internal/_concat';
import compose from './compose';
import filterBy from './filterBy';
import isUndefined from './isUndefined';
import not from './not';

const notUndefined = compose(not, isUndefined);
const removeUndefined = filterBy(notUndefined);
const removeUndefinedFromClone = compose(removeUndefined, _concat);

const toArray = (...args) => removeUndefinedFromClone([], ...args);

export default toArray;
