/**
 * Safely traverse object nested properties
 * 
 * @func
 * @since 1.0.0
 * @param {Object} obj
 * @param {Array<string>} path
 * @return {*}
 * @example
 * 
 *     traverse({}, ['a', 'b', 'c']); //=> undefined
 *     traverse({ a: 1 })(['a']); //=> 1
 */

import define from './define';
import isObject from './isObject';
import ternary from './ternary';

const UNDEF = undefined;

const traverse = (obj, path) => path.reduce((acc, seg) => ternary(
    UNDEF,
    () => acc[seg],
    isObject(acc),
), obj);

const check = define(traverse);

export default check;
