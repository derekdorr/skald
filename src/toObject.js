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
import equals from './equals';
import isNull from './isNull';
import isString from './isString';
import ternary from './ternary';

const equalsOne = equals(INT_ONE);
const equalsZero = equals(INT_ZERO);
const { assign } = Object;
const assignMultiple = vals => assign({}, ...vals);
const assignOne = vals => assign({}, vals[INT_ZERO]);
const ifString = vals => ternary(() => assignOne(vals), {})(isString(vals[INT_ZERO]));
const ifNull = vals => ternary(() => ifString(vals), NULL)(isNull(vals[INT_ZERO]));
const ifLengthOne = vals => ternary(
    () => assignMultiple(vals),
    () => ifNull(vals),
    equalsOne(vals.length),
);
const ifLengthZero = vals => ternary(
    () => ifLengthOne(vals),
    {},
    equalsZero(vals.length),
);

const toObject = (...vals) => ifLengthZero(vals);

export default toObject;
