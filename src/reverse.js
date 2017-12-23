/**
 * Take a function and return a function which accepts args in reverse order
 *
 * @module reverse
 * @func
 * @since 1.1.0
 * @param {function} fn
 * @return {function}
 * @example
 *
 *     const foo = (a, b, c) => a + b - c;
 *     reverse(foo); //=> (c)(b)(a) => c + b - a;
 */

import _concat from './_internal/_concat';
import _len from './_internal/_len';
import _lt from './_internal/_lt';
import _or from './_internal/_or';
import _reverse from './_internal/_reverse';

const reverse = (fn, len) => {
    const length = _or(len, _len(fn));
    const internal = (...args) => (_lt(_len(args), length) ?
        (...ops) => internal(..._concat(args, ops)) :
        fn(..._reverse(args)));

    return internal;
};

export default reverse;
