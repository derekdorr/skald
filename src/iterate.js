/**
 * Return array of function iterations of specified length generated from 0-based index
 *
 * @module iterate
 * @func
 * @since 1.9.0
 * @param {function} fn
 * @param {number} len
 * @return {Array}
 * @example
 *
 *     const foo = index => index + 1;
 *     iterate(foo, 3); //=> [1, 2, 3]
 *     iterate(foo)(2); //=> [1, 2]
 */

import { BOOL_TRUE } from 'permanent';
import _newArray from './_internal/_newArray';
import _fill from './_internal/_fill';
import _map from './_internal/_map';
import define from './define';

const internal = (fn, len) => _map(
    _fill(
        _newArray(len),
        BOOL_TRUE,
    ),
    (v, i) => fn(i),
);

const iterate = define(internal);

export default iterate;
