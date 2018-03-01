/**
 * Returns function which returns value if value is not a function.
 *
 * @module toFunction
 * @func
 * @since 1.0.0
 * @param {*} value
 * @return {function}
 * @example
 *
 *     toFunction(3); //=> () => 3
 *     toFunction(() => 1); //=> () => 1
 */

import _newArray from './_internal/_newArray';
import _ternary from './_internal/_ternary';
import call from './call';
import cast from './cast';
import compose from './compose';
import executeWith from './executeWith';
import fillBy from './fillBy';
import invoke from './invoke';
import isFunction from './isFunction';
import reverse from './reverse';

const fillByR = reverse(fillBy, 2);
const fillByVal = fillByR(_newArray(3));
const invokeCast = compose(invoke, cast);
const executeTernary = executeWith(_ternary, cast, invokeCast, isFunction);
const callExecuteTernary = call(executeTernary);
const toFunction = compose(callExecuteTernary, fillByVal);

export default toFunction;
