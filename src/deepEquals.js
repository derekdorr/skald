/**
 * Allow comparison of two objects or arrays
 *
 * @method deepEquals
 * @func
 * @since 1.4.0
 * @param {*} a
 * @param {*} b
 * @return {boolean|function}
 * @example
 *
 *     deepEquals({}, {}); //=> true
 *     deepEquals([])([]); //=> true
 */

import _every from './_internal/_every';
import _keys from './_internal/_keys';
import _len from './_internal/_len';
import and from './and';
import compose from './compose';
import define from './define';
import equals from './equals';
import executeWith from './executeWith';
import isObject from './isObject';

const areObjects = executeWith(and, isObject, isObject);
const keyLength = compose(_len, _keys);
const equalsKeyLength = executeWith(equals, keyLength, keyLength);

const pre = (a, b) =>
    equals(a, b) || (
        areObjects(a, b) &&
        equalsKeyLength(a, b) &&
        _every(_keys(a), val => pre(a[val], b[val]))
    );

const deepEquals = define(pre);

export default deepEquals;
