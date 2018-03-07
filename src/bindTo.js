/**
 * Takes a function and arguments. Leaves undefined arguments unbound and
 * binds defined arguments to their position in arguments list.
 *
 * @module bindTo
 * @func
 * @since 1.8.0
 * @param {function} fn
 * @param {...*} args
 * @return {function}
 * @example
 *
 *     const foo = (a, b, c) = a + b + c;
 *     bindTo(foo, 1, 2)(3); //=> 6
 *     bindTo(foo, undefined, 1, 2)(1); //=> 4
 *     bindTo(foo, undefined, undefined, 3)(1, 2); //=> 6
 *     bindTo(foo, undefined, 1)(1)(1); //=> 3
 */

import { INT_ONE, INT_ZERO } from 'permanent';
import _len from './_internal/_len';
import _max from './_internal/_max';
import _pop from './_internal/_pop';
import _slice from './_internal/_slice';
import INT_TWO from './_constants/INT_TWO';
import call from './call';
import compose from './compose';
import define from './define';
import executeWith from './executeWith';
import filterBy from './filterBy';
import getProp from './getProp';
import isUndefined from './isUndefined';
import iterate from './iterate';
import not from './not';
import reverse from './reverse';
import spread from './spread';
import subtract from './subtract';
import ternaryWith from './ternaryWith';

const notIsUndefined = compose(not, isUndefined);
const maxLength = executeWith(_max, _len, _len);
const filterByNotUndefined = filterBy(notIsUndefined);
const getPropZero = getProp(INT_ZERO);
const getPropR = reverse(getProp, INT_TWO);
const iterateR = reverse(iterate, INT_TWO);
const bindTo = arr => {
    const fn = getPropZero(arr);
    const args = _slice(arr, INT_ONE);
    const length = maxLength(fn, args);
    const def = filterByNotUndefined(args);
    const defLength = _len(def);
    const diff = subtract(length, defLength);
    const getArgsProp = getPropR(args);
    const isArgDefined = compose(not, isUndefined, getArgsProp);
    const callFn = call(fn);
    const iterateLength = iterateR(length);
    const pre = ops => callFn(iterateLength(ternaryWith(() => _pop(ops), getArgsProp, isArgDefined))); // eslint-disable-line max-len
    const internal = compose(pre, spread);
    return define(internal, diff);
};

export default compose(bindTo, spread);
