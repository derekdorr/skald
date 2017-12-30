/**
 * Forces value into object. If not object, returns {}
 *
 * @module toObject
 * @func
 * @since 1.0.0
 * @param {*} value
 * @return {Object}
 * @example
 *
 *     toObject({ a: 1 }); //=> { a: 1 }
 *     toObject(null); //=> null
 *     toObject('foo'); //=> {}
 */

import { INT_ONE, INT_ZERO, NULL } from 'permanent';
import _assign from './_internal/_assign';
import _len from './_internal/_len';
import at from './at';
import compose from './compose';
import equals from './equals';
import isNull from './isNull';
import isString from './isString';
import ternaryWith from './ternaryWith';

const atZero = at(INT_ZERO);
const equalsOne = equals(INT_ONE);
const equalsZero = equals(INT_ZERO);
const assignMultiple = vals => _assign({}, ...vals);
const assignOne = vals => _assign({}, atZero(vals));
const isStringAtZero = compose(isString, atZero);
const isNullAtZero = compose(isNull, atZero);
const lenEqualsOne = compose(equalsOne, _len);
const lenEqualsZero = compose(equalsZero, _len);
const ifString = ternaryWith(assignOne, {}, isStringAtZero);
const ifNull = ternaryWith(ifString, NULL, isNullAtZero);
const ifLengthOne = ternaryWith(assignMultiple, ifNull, lenEqualsOne);
const ifLengthZero = ternaryWith(ifLengthOne, {}, lenEqualsZero);

const toObject = (...vals) => ifLengthZero(vals);

export default toObject;
