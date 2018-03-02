/**
 * Slice an array or string
 *
 * @module sliceFrom
 * @func
 * @since 1.17.1
 * @param {number} start
 * @param {number} end
 * @param {Array|string} val
 * @return {function|Array|string}
 * @example
 *
 *     sliceFrom(0, 1, [1, 2, 3]) //=> [0];
 */

import _slice from './_internal/_slice';
import ARR_ORDER from './_constants/ARR_ORDER';
import INT_THREE from './_constants/INT_THREE';
import call from './call';
import compose from './compose';
import define from './define';
import orderBy from './orderBy';
import spread from './spread';

const callSlice = call(_slice);
const orderArgs = orderBy(ARR_ORDER);
const internal = compose(callSlice, orderArgs, spread);
const sliceFrom = define(internal, INT_THREE);

export default sliceFrom;
