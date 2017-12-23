/**
 * Take an array of functions (or values) and determine if one result is
 * true given value
 *
 * @module orWith
 * @func
 * @since 1.10.0
 * @param {Array} args
 * @param {*} val
 * @return {boolean|function}
 * @example
 *
 *     const foo = val => val > 10;
 *     const bar = val => val < 5;
 *     orWith([foo, bar], 6); //=> false
 *     orWith([foo, bar])(1); //=> true
 */

import define from './define';
import or from './or';
import mapBy from './mapBy';
import toFunction from './toFunction';

const mapToFunction = mapBy(toFunction);
const internal = (args, val) => {
    const fns = mapToFunction(args);
    const values = mapBy(fn => fn(val), fns);
    return or(...values);
};

const orWith = define(internal);

export default orWith;
