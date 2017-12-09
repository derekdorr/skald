/**
 * Returns function which returns value if value is not a function.
 * 
 * @func
 * @since 1.0.0
 * @param {*} value
 * @return {function}
 * @example
 * 
 *     toFunction(3); //=> () => 3
 *     toFunction(() => 1); //=> () => 1
 */

import isFunction from './isFunction';

const toFunction = val => (
    isFunction(val) ?
        val :
        () => val
);

export default toFunction;
