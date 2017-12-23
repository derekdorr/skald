/**
 * Converts value to string. Converts undefined to empty string.
 *
 * @module toString
 * @func
 * @since 1.0.0
 * @param {*} value
 * @return {string}
 * @example
 *
 *     toString('foo'); //=> 'foo'
 *     toString(false); //=> 'false'
 *     toString(undefined); //=> ''
 */

import { STR_EMPTY } from 'permanent';
import _concat from './_internal/_concat';
import isUndefined from './isUndefined';
import ternaryWith from './ternaryWith';

const concatToEmpty = val => _concat(STR_EMPTY, val);
const toString = ternaryWith(concatToEmpty, STR_EMPTY, isUndefined);

export default toString;
