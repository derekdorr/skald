/**
 * Create a function which executes a function based on a defined value
 *
 * @module executeWith
 * @func
 * @since 1.11.0
 * @param {*} val
 * @param {function} fn
 * @return {function|*}
 * @example
 *
 *     const addOne = a => a + 1;
 *     executeOn(1, addOne); //=> 2
 *     executeOn(2)(addOne); //=> 3
 */

import define from './define';

const internal = (val, fn) => fn(val);
const executeOn = define(internal);

export default executeOn;
