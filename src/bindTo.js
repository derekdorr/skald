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

import _filter from './_internal/_filter';
import _len from './_internal/_len';
import _or from './_internal/_or';
import compose from './compose';
import define from './define';
import isUndefined from './isUndefined';
import iterate from './iterate';
import not from './not';
import subtract from './subtract';
import ternary from './ternary';

const notIsUndefined = compose(not, isUndefined);
const bindTo = (fn, ...args) => {
    const length = _or(_len(fn), _len(args));
    const def = _filter(args, notIsUndefined);
    const defLength = _len(def);
    const diff = subtract(length, defLength);
    const internal = (...ops) => {
        const fin = iterate(i => {
            const argAtIndex = args[i];
            return ternary(
                argAtIndex,
                () => ops.pop(),
                isUndefined(argAtIndex),
            );
        }, length);

        return fn(...fin);
    };

    return define(internal, diff);
};

export default bindTo;
