/**
 * Return success or failure based on predicate evaluation. If success or
 * failure are functions, returns executed result with passed in parameter;
 *
 * @module ternaryWith
 * @func
 * @since 1.9.0
 * @param {*} failure
 * @param {*} success
 * @param {*} predicate
 * @param {*} val
 * @return {*}
 * @example
 *
 *     const foo = val => val + 1;
 *     const bar = val => val - 1;
 *     ternaryWith(bar, foo, true, 3); //=> 4
 *     ternaryWith(bar, foo, false, 2); //=> 1
 */

import define from './define';
import toFunction from './toFunction';

const internal = (failure, success, predicate, val) =>
    (toFunction(predicate)(val) ?
        toFunction(success)(val) :
        toFunction(failure)(val));

const ternary = define(internal);

export default ternary;
