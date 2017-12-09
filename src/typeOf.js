/**
 * Returns typeof value
 *
 * @module typeOf
 * @func
 * @since 1.0.0
 * @param {*} val
 * @return {string}
 * @example
 *
 *     typeOf([]); //=> 'object'
 *     typeOf(undefined); //=> 'undefined'
 *     typeOf(5); //=> 'number'
 */

const typeOf = val => typeof val;

export default typeOf;
