/**
 * Returns true if string is not in string or array
 *
 * @method excludes
 * @func
 * @since 1.4.0
 * @param {string|number} search
 * @param {string|Array} val
 * @returns {boolean|function}
 * @example
 *
 *     includes('h', 'hello'); //=> false
 *     includes('a')('apple'); //=> false
 */

import { BOOL_FALSE, INT_NEGATIVE_ONE } from 'permanent';
import define from './define';
import equals from './equals';
import isArray from './isArray';
import isString from './isString';
import or from './or';
import ternary from './ternary';

const equalsNegativeOne = equals(INT_NEGATIVE_ONE);
const pre = (search, value) => ternary(
    BOOL_FALSE,
    () => equalsNegativeOne(value.indexOf(search)),
    or(isString(value), isArray(value)),
);
const includes = define(pre);

export default includes;
