/**
 * Check whether object, array, or string is empty
 *
 * @method isEmpty
 * @func
 * @since 1.5.0
 * @param {Object|Array|string} val
 * @return {boolean}
 * @example
 *
 *     isEmpty([]); //=> true
 *     isEmpty({}); //=> true
 *     isEmpty(''); //=> true
 */

import { BOOL_FALSE, INT_ZERO, STR_EMPTY } from 'permanent';
import equals from './equals';
import isObject from './isObject';
import or from './or';
import ternary from './ternary';

const equalsZero = equals(INT_ZERO);
const equalsEmpty = equals(STR_EMPTY);
const { keys } = Object;
const failureToFalse = ternary(BOOL_FALSE);
const isEmpty = val => or(equalsEmpty(val), failureToFalse(
    () => equalsZero(keys(val).length),
    isObject(val),
));

export default isEmpty;
