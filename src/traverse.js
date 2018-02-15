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

import { UNDEF } from 'permanent';
import define from './define';
import getProp from './getProp';
import isObject from './isObject';
import reduceBy from './reduceBy';
import ternaryWith from './ternaryWith';

const getSegment = (acc, seg) => ternaryWith(UNDEF, getProp(seg), isObject)(acc);
const internal = (obj, path) => reduceBy(getSegment, obj, path);
const traverse = define(internal);

export default traverse;
