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

import define from './define';
import toFunction from './toFunction';

const internal = (failure, success, predicate) =>
    (toFunction(predicate)() ?
        toFunction(success)() :
        toFunction(failure)());

const ternary = define(internal);

export default ternary;
