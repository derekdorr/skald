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

import _reverse from './_internal/_reverse';
import call from './call';
import compose from './compose';
import define from './define';
import executeOn from './executeOn';
import executeWith from './executeWith';
import or from './or';
import mapBy from './mapBy';
import spread from './spread';
import toFunction from './toFunction';

const mapToFunction = mapBy(toFunction);
const updateArgs = executeWith(mapBy, executeOn, mapToFunction);
const callUpdateArgs = call(updateArgs);
const internal = compose(or, callUpdateArgs, _reverse, spread);

const orWith = define(internal, 2);

export default orWith;
