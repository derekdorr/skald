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
import _len from './_internal/_len';
import args from './args';
import at from './at';
import call from './call';
import compose from './compose';
import equals from './equals';
import getEmptyObj from './getEmptyObj';
import isNull from './isNull';
import isString from './isString';
import merge from './merge';
import ternaryWith from './ternaryWith';

const atZero = at(INT_ZERO);
const equalsOne = equals(INT_ONE);
const equalsZero = equals(INT_ZERO);
const assignMultiple = call(merge);
const assignOne = compose(merge, atZero);
const isStringAtZero = compose(isString, atZero);
const isNullAtZero = compose(isNull, atZero);
const lenEqualsOne = compose(equalsOne, _len);
const lenEqualsZero = compose(equalsZero, _len);
const ifString = ternaryWith(assignOne, getEmptyObj, isStringAtZero);
const ifNull = ternaryWith(ifString, NULL, isNullAtZero);
const ifLengthOne = ternaryWith(assignMultiple, ifNull, lenEqualsOne);
const ifLengthZero = ternaryWith(ifLengthOne, getEmptyObj, lenEqualsZero);

const toObject = compose(ifLengthZero, args);

export default toObject;
