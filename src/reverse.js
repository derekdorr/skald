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

import _or from './_internal/_or';

const reverse = (fn, len) => {
    const length = _or(len, fn.length);
    const internal = (...args) => {
        console.log(args);
        return (args.length < length ?
            (...ops) => internal(...args.concat(ops)) :
            fn(...args.reverse()));
    };

    return internal;
};

export default reverse;
