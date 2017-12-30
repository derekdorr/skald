/**
 * Take an array of functions (or values) and determine if all results are
 * true given value
 *
 * @module andWith
 * @func
 * @since 1.10.0
 * @param {Array} args
 * @param {*} val
 * @return {boolean|function}
 * @example
 *
 *     const foo = val => val < 10;
 *     const bar = val => val > 5;
 *     andWith([foo, bar], 6); //=> true
 *     andWith([foo, bar])(1); //=> false
 */

import and from './and';
import define from './define';
import mapBy from './mapBy';
import toFunction from './toFunction';

const mapToFunction = mapBy(toFunction);
const internal = (args, val) => {
    const fns = mapToFunction(args);
    const values = mapBy(fn => fn(val), fns);
    return and(...values);
};

const andWith = define(internal);

export default andWith;
