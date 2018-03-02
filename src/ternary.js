/**
 * Return success or failure based on predicate evaluation. If success or
 * failure are functions, returns executed result.
 *
 * @module ternary
 * @func
 * @since 1.0.0
 * @param {*} failure
 * @param {*} success
 * @param {*} predicate
 * @return {*}
 * @example
 *
 *     ternary(1, 2, true); //=> 2
 *     ternary(1, 2, false); //=> 1
 */

import _ternary from './_internal/_ternary';
import INT_THREE from './_constants/INT_THREE';
import compose from './compose';
import define from './define';
import executeWith from './executeWith';
import invoke from './invoke';
import toFunction from './toFunction';

const invokeToFunction = compose(invoke, toFunction);
const executeTernary = executeWith(_ternary, toFunction, toFunction, invokeToFunction);
const internal = compose(invoke, executeTernary);
const ternary = define(internal, INT_THREE);

export default ternary;
