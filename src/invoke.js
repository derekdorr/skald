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

import INT_TWO from './_constants/INT_TWO';
import call from './call';
import reverse from './reverse';

const callR = reverse(call, INT_TWO);
const invoke = callR([]);

export default invoke;
