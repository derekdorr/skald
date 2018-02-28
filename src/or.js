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
import call from './call';
import compose from './compose';
import concat from './concat';
import someBy from './someBy';
import spread from './spread';
import toBoolean from './toBoolean';

const someTrue = someBy(toBoolean);
const concatArgs = concat([]);
const alwaysArray = call(concatArgs);
const or = compose(someTrue, alwaysArray, spread);

export default or;
