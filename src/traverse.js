/**
 * Safely traverse object nested properties
 *
 * @module traverse
 * @func
 * @since 1.6.0
 * @param {Object} obj
 * @param {Array<string>} path
 * @return {*}
 * @example
 *
 *     traverse({}, ['a', 'b', 'c']); //=> undefined
 *     traverse({ a: 1 })(['a']); //=> 1
 */

import { INT_ZERO, UNDEF } from 'permanent';
import _reverse from './_internal/_reverse';
import call from './call';
import compose from './compose';
import define from './define';
import getProp from './getProp';
import isObject from './isObject';
import reduceBy from './reduceBy';
import sliceFrom from './sliceFrom';
import spread from './spread';
import ternaryWith from './ternaryWith';

const getPropZero = getProp(INT_ZERO);
const callGetProp = call(getProp);
const sliceFirstTwo = sliceFrom(INT_ZERO, 2);
const getProperty = compose(callGetProp, _reverse, sliceFirstTwo);
const isAccObject = compose(isObject, getPropZero);
const checkSegment = ternaryWith(UNDEF, getProperty, isAccObject);
const getSegment = compose(checkSegment, spread);
const internal = reduceBy(getSegment);
const traverse = define(internal, 2);

export default traverse;
