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

import _reverse from './_internal/_reverse';
import and from './and';
import call from './call';
import compose from './compose';
import define from './define';
import executeOn from './executeOn';
import executeWith from './executeWith';
import mapBy from './mapBy';
import spread from './spread';
import toFunction from './toFunction';

const mapToFunction = mapBy(toFunction);
const updateArgs = executeWith(mapBy, executeOn, mapToFunction);
const callUpdateArgs = call(updateArgs);
const internal = compose(and, callUpdateArgs, _reverse, spread);
const andWith = define(internal, 2);

export default andWith;
