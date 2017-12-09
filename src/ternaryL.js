/**
 * Return success or failure based on predicate evaluation. If success or
 * failure are functions, returns executed result.
 *
 * @module ternaryL
 * @func
 * @since 1.1.0
 * @param {*} predicate
 * @param {*} success
 * @param {*} failure
 * @return {*}
 * @example
 *
 *     ternaryL(true, 1, 2); //=> 1
 *     ternaryL(false, 1, 2); //=> 2
 */

import define from './define';
import toFunction from './toFunction';

const internal = (predicate, success, failure) =>
    (toFunction(predicate)() ?
        toFunction(success)() :
        toFunction(failure)());

const ternaryL = define(internal);

export default ternaryL;
