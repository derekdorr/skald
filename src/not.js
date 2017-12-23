/**
 * Returns false if truthy, true if falsy, negation if function
 *
 * @module not
 * @func
 * @since 1.1.0
 * @param {*} val
 * @return {boolean|function}
 * @example
 *
 *     const identity = a => a;
 *     not(1); //=> false
 *     not(false); //=> true
 *     not(identity)(true); //=> false
 */

import isFunction from './isFunction';

const not = val => (isFunction(val) ? a => !a : !val);

export default not;
