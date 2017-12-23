/**
 * Returns false if truthy, true if falsy
 *
 * @module not
 * @func
 * @since 1.1.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     not(1); //=> false
 *     not(false); //=> true
 */

import isFunction from './isFunction';

const not = val => (isFunction(val) ? a => !a : !val);

export default not;
