/**
 * Forces value into object. If not object, returns {}
 * 
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

import equals from './equals';
import isNull from './isNull';
import isString from './isString';
import ternary from './ternary';

const INT_ONE = 1;
const INT_ZERO = 0;
const NULL = null;
const equalsOne = equals(INT_ONE);
const equalsZero = equals(INT_ZERO);
const createObject = () => Object.create(NULL);
const assignMultiple = vals => Object.assign(createObject(), ...vals);
const assignOne = vals => Object.assign(createObject(), vals[INT_ZERO]);
const ifString = vals => ternary(() => assignOne(vals), createObject)(isString(vals[INT_ZERO]));
const ifNull = vals => ternary(() => ifString(vals), NULL)(isNull(vals[INT_ZERO]));
const ifLengthOne = vals => ternary(
    () => assignMultiple(vals),
    () => ifNull(vals),
)(equalsOne(vals.length));
const ifLengthZero = vals => ternary(
    () => ifLengthOne(vals),
    createObject,
)(equalsZero(vals.length));

const toObject = (...vals) => ifLengthZero(vals);

export default toObject;
