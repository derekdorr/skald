/**
 * Fill an array with a defined value
 *
 * @module fillBy
 * @func
 * @since 1.17.0
 * @param {val} val
 * @param {Array} arr
 * @return {function|arr}
 * @example
 *
 *     fillBy(1, [undefined, undefined]); //=> [1, 1]
 *     fillBy(2)([undefined, undefined); //=> [2, 2]
 */

import _fill from './_internal/_fill';
import INT_TWO from './_constants/INT_TWO';
import reverse from './reverse';

const fillBy = reverse(_fill, INT_TWO);

export default fillBy;
