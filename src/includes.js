/**
 * Returns true if string is in string or array
 *
 * @method includes
 * @func
 * @since 1.4.0
 * @param {string|number} search
 * @param {string|Array} val
 * @returns {boolean|function}
 * @example
 *
 *     includes('h', 'hello'); //=> true
 *     includes('a')('apple'); //=> true
 */

import { BOOL_FALSE, INT_NEGATIVE_ONE } from 'permanent';
import define from './define';
import notEquals from './notEquals';
import isArray from './isArray';
import isString from './isString';
import or from './or';
import ternary from './ternary';

const notNegativeOne = notEquals(INT_NEGATIVE_ONE);
const pre = (search, value) => ternary(
    BOOL_FALSE,
    () => notNegativeOne(value.indexOf(search)),
    or(isString(value), isArray(value)),
);
const includes = define(pre);

export default includes;
