/**
 * Create a function which executes a function with each arg being transformed
 * by a function
 *
 * @module executeWith
 * @func
 * @since 1.11.0
 * @param {function} fn
 * @param {...*} args
 * @return {function}
 * @example
 *
 *     const foo = (a, b) => a + b;
 *     const add1 = a => a + 1;
 *     const add2 = b => b + 2;
 *     executeWith(foo, add1, add2)(0, 0); //=> 3
 *     executeWith(foo, add1)(0, 0); //=> 1
 */

import { INT_ONE, INT_ZERO } from 'permanent';
import _slice from './_internal/_slice';
import apply from './apply';
import call from './call';
import compose from './compose';
import getProp from './getProp';
import spread from './spread';

const getPropZero = getProp(INT_ZERO);
const executeWith = arr => {
    const fn = getPropZero(arr);
    const args = _slice(arr, INT_ONE);
    return compose(call(fn), apply(args), spread);
};

export default compose(executeWith, spread);
