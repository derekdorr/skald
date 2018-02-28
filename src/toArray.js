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

import compose from './compose';
import concat from './concat';
import filterBy from './filterBy';
import isUndefined from './isUndefined';
import not from './not';

const notUndefined = compose(not, isUndefined);
const removeUndefined = filterBy(notUndefined);
const concatToEmpty = concat([]);
const toArray = compose(removeUndefined, concatToEmpty);

export default toArray;
