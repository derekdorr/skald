/**
 * Take a function with a known signature and allow arguments to be
 * passed until it executes
 *
 * @module define
 * @func
 * @since 1.0.0
 * @update
 * @param {function} fn
 * @return {function|*}
 * @example
 *
 *     const foo = (a, b, c) => a + b + c;
 *     const bar = define(foo);
 *     bar(1); // (b, c) => 1 + b + c
 *     bar(1)(2); // c => 1 + 2 + c
 *     bar(1)(2)(3); // 6
 */

import _or from './_internal/_or';

const define = (fn, len) => {
    const length = _or(len, fn.length);
    const internal = (...args) => (args.length < length ?
        (...ops) => internal(...args.concat(ops)) :
        fn(...args));

    return internal;
};

export default define;
