/**
 * Returns a function which accepts no params and returns the passed value
 *
 * @module concat
 * @func
 * @since 1.16.0
 * @param {*} val
 * @return {function}
 * @example
 *
 *     cast(6); //=> () = 6;
 */

const cast = val => () => val;

export default cast;
