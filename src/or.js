/**
 * Determine if at least one argument or array value is truthy
 *
 * @module or
 * @func
 * @since 1.0.0
 * @param {...*} args
 * @returns {boolean}
 * @example
 *
 *     or(true, false, false); //=> true
 *     or([false, false, true]); //=> true
 */
import { INT_ONE, INT_ZERO } from 'permanent';
import curry from './curry';
import equals from './equals';
import ternary from './ternary';
import toBoolean from './toBoolean';

const equalsOne = equals(INT_ONE);
const allTrue = curry(arr => arr.some(toBoolean));

const or = (...args) => ternary(
    () => allTrue(args),
    () => or(...args[INT_ZERO]),
    equalsOne(args.length),
);

export default or;
