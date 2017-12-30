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
import and from './and';
import define from './define';
import equals from './equals';
import executeWith from './executeWith';
import isNull from './isNull';
import isObject from './isObject';
import none from './none';
import ternary from './ternary';

const areObjects = executeWith(and, isObject, isObject);
const noNulls = executeWith(none, isNull, isNull);

const pre = (a, b) => {
    const aEqualsB = () => equals(a, b);
    const failUseEquals = ternary(aEqualsB);
    const compareKeys = () => _every(_keys(a), val => pre(a[val], b[val]));
    const checkNulls = failUseEquals(compareKeys);
    const checkObjects = failUseEquals(() => checkNulls(noNulls(a, b)));
    return checkObjects(areObjects(a, b));
};

const deepEquals = define(pre);

export default deepEquals;
