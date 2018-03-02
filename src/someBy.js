/**
 * Determine if at least one value in array satisfy function
 *
 * @module someBy
 * @func
 * @since 1.17.0
 * @param {function} fn
 * @param {Array} arr
 * @return {function|boolean}
 * @example
 *
 *     const isTrue = val => val === true;
 *     someBy(isTrue, [true, false]) //=> true
 *     someBy(isTrue)([false, false]) //=> false
 */

import _some from './_internal/_some';
import INT_TWO from './_constants/INT_TWO';
import reverse from './reverse';

const someBy = reverse(_some, INT_TWO);

export default someBy;
