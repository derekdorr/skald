/**
 * Attempt something. If an error is thrown, return something else.
 * (Wrapper for try / catch)
 *
 * @module attempt
 * @func
 * @since 1.7.0
 * @param {*} toTry
 * @param {*} onError
 * @return {*}
 * @example
 *
 *     attempt(() => JSON.parse('<>'), false); //=> false
 *     attempt(5, () => ({})); //=> 5
 */

import define from './define';
import toFunction from './toFunction';

const internal = (toTry, onError) => {
    try {
        return toFunction(toTry)();
    } catch (e) {
        return toFunction(onError)(e);
    }
};

const attempt = define(internal);

export default attempt;
