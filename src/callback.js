/**
 * @module callback
 * Take two arguments and if second argument is truthy, return first.
 *
 * @func
 * @since 1.0.0
 * @param {*} callback
 * @param {*} predicate
 * @return {*}
 * @example
 *
 *     callback('foo', true); //=> true
 *     callback('foo', false); //=> null
 */

import ternary from './ternary';

const callback = ternary(null);

export default callback;
