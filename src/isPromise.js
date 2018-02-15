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

import { BOOL_FALSE, BOOL_TRUE } from 'permanent';
import compose from './compose';
import isFunction from './isFunction';
import isObject from './isObject';
import getProp from './getProp';
import ternaryWith from './ternaryWith';

const getPropThen = getProp('then');
const isThen = compose(isFunction, getPropThen);
const hasThen = ternaryWith(BOOL_FALSE, BOOL_TRUE, isThen);
const isPromise = ternaryWith(BOOL_FALSE, hasThen, isObject);

export default isPromise;
