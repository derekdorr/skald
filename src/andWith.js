/**
 * Take an array of functions (or values) and determine if all results are
 * true given value
 *
 * @module andWith
 * @func
 * @since 1.10.0
 * @param {Array} fns
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
import executeOn from './executeOn';
import mapBy from './mapBy';
import toFunction from './toFunction';

const mapToFunction = mapBy(toFunction);
const internal = (fns, val) => {
    const funcs = mapToFunction(fns);
    const executeOnVal = executeOn(val);
    const values = mapBy(executeOnVal, funcs);
    return and(values);
};

const andWith = define(internal);

export default andWith;
