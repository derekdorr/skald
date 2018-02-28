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

import call from './call';
import compose from './compose';
import concat from './concat';
import everyBy from './everyBy';
import spread from './spread';
import toBoolean from './toBoolean';

const allTrue = everyBy(toBoolean);
const concatArgs = concat([]);
const alwaysArray = call(concatArgs);
const and = compose(allTrue, alwaysArray, spread);

export default and;
