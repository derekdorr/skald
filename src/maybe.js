/**
 * Execute a function if the argument is not null or undefined
 *
 * @module maybe
 * @func
 * @author oculus42
 * @since 1.23.0
 * @param {function} fn
 * @param {*} val
 * @return {function|*}
 * @example
 *
 *     const foo = val => val + 1;
 *     maybe(foo, 1); //=> 2
 *     maybe(foo)(null); //=> null
 */

import define from './define';
import identity from './identity';
import isNull from './isNull';
import isUndefined from './isUndefined';
import orWith from './orWith';
import ternaryWith from './ternaryWith';

const isValid = orWith([isNull, isUndefined]);
const maybe = (fn, val) => ternaryWith(fn, identity, isValid, val);

export default define(maybe);
