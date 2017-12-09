/**
 * Take a value and determine if it is a promise
 *
 * @module isPromise
 * @func
 * @since 1.1.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     isPromise(Promise.resolve()); //=> true
 *     isPromise('foo'); //=> false
 */

import isFunction from './isFunction';
import isObject from './isObject';
import ternary from './ternary';

const BOOL_FALSE = false;
const BOOL_TRUE = true;

const isPromise = val => ternary(
    BOOL_FALSE,
    () => ternary(
        BOOL_FALSE,
        BOOL_TRUE,
        isFunction(val.then),
    ),
    isObject(val),
);

export default isPromise;
