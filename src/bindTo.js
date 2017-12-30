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

import _len from './_internal/_len';
import _max from './_internal/_max';
import _pop from './_internal/_pop';
import compose from './compose';
import define from './define';
import executeWith from './executeWith';
import filterBy from './filterBy';
import isUndefined from './isUndefined';
import iterate from './iterate';
import not from './not';
import subtract from './subtract';
import ternary from './ternary';

const notIsUndefined = compose(not, isUndefined);
const maxLength = executeWith(_max, _len, _len);
const filterByNotUndefined = filterBy(notIsUndefined);
const bindTo = (fn, ...args) => {
    const length = maxLength(fn, args);
    const def = filterByNotUndefined(args);
    const defLength = _len(def);
    const diff = subtract(length, defLength);
    const internal = (...ops) => {
        const fin = iterate(i => {
            const argAtIndex = args[i];
            return ternary(
                argAtIndex,
                () => _pop(ops),
                isUndefined(argAtIndex),
            );
        }, length);

        return fn(...fin);
    };

    return define(internal, diff);
};

export default bindTo;
