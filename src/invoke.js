/**
 * Invoke a function without arguments
 *
 * @module invoke
 * @func
 * @since 1.18.0
 * @param {function} fn
 * @return {*}
 * @example
 *
 *     var foo = () => 1;
 *     invoke(foo); //=> 1;
 */

const invoke = fn => fn();

export default invoke;
