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
import _reduce from './_internal/_reduce';
import define from './define';
import isObject from './isObject';
import ternary from './ternary';

const internal = (obj, path) => _reduce(
    path,
    (acc, seg) => ternary(
        UNDEF,
        () => acc[seg],
        isObject(acc),
    ),
    obj,
);

const traverse = define(internal);

export default traverse;
