/**
 * Determine if all arguments are truthy or if array is truthy
 *
 * @module and
 * @func
 * @since 1.0.0
 * @param {...*} args
 * @return {boolean}
 * @example
 *
 *     and(true, true); //=> true
 *     and([true, true]); //=> true
 *     and(true, true, false); //=> false
 */

import { INT_ONE, INT_ZERO } from 'permanent';
import equals from './equals';
import ternary from './ternary';
import toBoolean from './toBoolean';

const equalsOne = equals(INT_ONE);

const and = (...args) => ternary(
    () => args.every(toBoolean),
    () => and(...args[INT_ZERO]),
    equalsOne(args.length),
);

export default and;
