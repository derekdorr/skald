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

import cast from './cast';
import isFunction from './isFunction';

const toFunction = val => (
    isFunction(val) ?
        val :
        cast(val)
);

export default toFunction;
