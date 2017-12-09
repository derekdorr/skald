/**
 * Sets default value if passed value is falsy
 *
 * @module defaultTo
 * @func
 * @since 1.2.0
 * @param {*} def
 * @param {*} val
 * @return {*}
 * @example
 *
 *     defaultTo(5, undefined); //=> 5
 *     defaultTo(3)(4); //=> 4
 */

import define from './define';

const pre = (def, val) => val || def;

const defaultTo = define(pre);

export default defaultTo;
