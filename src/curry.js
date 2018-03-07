/**
 * Curry arguments to function and return new function
 *
 * @module curry
 * @func
 * @since 1.0.0
 * @param {function} fn
 * @param {...*} args
 * @return {function|*}
 * @example
 *
 *     const foo = (a, b, c) => a + b + c;
 *     curry(foo, 1, 2)(3); //=> 6
 *     curry(foo, 1)(3, 4); //=> 8
 *     curry(foo, 2)(3)(4); //=> 9
 *     curry(foo)(1)(1)(1); // => 3
 */

import { INT_ONE, INT_ZERO } from 'permanent';
import _slice from './_internal/_slice';
import call from './call';
import compose from './compose';
import define from './define';
import getProp from './getProp';
import spread from './spread';

const getPropZero = getProp(INT_ZERO);
const getFn = compose(call, define, getPropZero);
const curry = arr => {
    const fn = getFn(arr);
    const args = _slice(arr, INT_ONE);
    return fn(args);
};

export default compose(curry, spread);
