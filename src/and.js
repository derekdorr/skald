/**
 * @module and
 * Determine if all arguments are truthy or if array is truthy
 *
 * @func
 * @since 1.0.0
 * @param {...*} a
 * @return {boolean}
 * @example
 *
 *     and(true, true); //=> true
 *     and([true, true]); //=> true
 *     and(true, true, false); //=> false
 */

import equals from './equals';
import ternary from './ternary';
import toBoolean from './toBoolean';

const INT_ONE = 1;
const INT_ZERO = 0;
const equalsOne = equals(INT_ONE);

const and = (...args) => ternary(
    () => args.every(toBoolean),
    () => and(...args[INT_ZERO]),
    equalsOne(args.length),
);

export default and;
