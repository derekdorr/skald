/**
 *
 * Compose functions from right to left
 *
 * @module compose
 * @func
 * @since 1.0.0
 * @param {...function} args
 * @returns {function}
 * @example
 *
 *     compose(val => val + 1, val => val + 2); //=> val => val + 3
 */

import _reduce from './_internal/_reduce';
import _reverse from './_internal/_reverse';
import call from './call';
import executeOn from './executeOn';

const compose = (...args) => {
    const [first, ...rest] = _reverse(args);
    const callFirst = call(first);

    return (...opts) => _reduce(
        rest,
        executeOn,
        callFirst(opts),
    );
};

export default compose;
