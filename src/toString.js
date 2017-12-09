/**
 * Converts value to string. Converts undefined to empty string.
 * 
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

import curry from './curry';
import isUndefined from './isUndefined';
import ternary from './ternary';

const STR_EMPTY = '';
const concatToEmpty = val => STR_EMPTY.concat(val);
const toString = val => ternary(curry(concatToEmpty, val), STR_EMPTY)(isUndefined(val));

export default toString;
