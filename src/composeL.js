/**
 *
 * Compose functions from right to left
 *
 * @module composeL
 * @func
 * @since 1.0.0
 * @param {...function} args
 * @returns {function}
 * @example
 *
 *     compose(val => val + 1, val => val + 2); //=> val => val + 3
 */

const compose = (...args) => {
    const [first, ...rest] = args;

    return (...opts) => rest.reduce(
        (prevFn, nextFn) => nextFn(prevFn),
        first(...opts),
    );
};

export default compose;
