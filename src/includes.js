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
import _indexOf from './_internal/_indexOf';
import compose from './compose';
import define from './define';
import notEquals from './notEquals';
import isArray from './isArray';
import isString from './isString';
import or from './or';
import ternaryWith from './ternaryWith';

const notNegativeOne = notEquals(INT_NEGATIVE_ONE);
const isStringOrArray = val => or(isString(val), isArray(val));
const indexOf = define((search, value) => _indexOf(value, search));
const failToFalse = ternaryWith(BOOL_FALSE);
const internal = (search, value) => {
    const indexOfValue = indexOf(search);
    const indexNotNegativeOne = compose(notNegativeOne, indexOfValue);
    return failToFalse(indexNotNegativeOne, isStringOrArray, value);
};
const includes = define(internal);

export default includes;
