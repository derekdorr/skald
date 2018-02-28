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
import define from './define';

const internal = (start, end, val) => _slice(val, start, end);
const sliceFrom = define(internal);

export default sliceFrom;
