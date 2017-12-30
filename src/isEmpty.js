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
import _keys from './_internal/_keys';
import _len from './_internal/_len';
import compose from './compose';
import equals from './equals';
import isObject from './isObject';
import orWith from './orWith';
import ternaryWith from './ternaryWith';

const equalsZero = equals(INT_ZERO);
const equalsEmpty = equals(STR_EMPTY);
const doKeysEqualZero = compose(equalsZero, _len, _keys);
const ifNotEmptyString = ternaryWith(BOOL_FALSE, doKeysEqualZero, isObject);
const isEmpty = orWith([equalsEmpty, ifNotEmptyString]);

export default isEmpty;
