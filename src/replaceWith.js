/**
 * Replace search with new value in string
 *
 * @module replaceWith
 * @func
 * @since 1.6.0
 * @param {string|RegExp} search
 * @param {string} rep
 * @param {string} str
 * @return {string|function}
 * @example
 *
 *     replaceWith('f', 'b', 'foo'); //=> 'boo'
 *     replaceWith(/o/g)('a')('foo'); //=> 'faa'
 */

import _replace from './_internal/_replace';
import ARR_ORDER from './_constants/ARR_ORDER';
import INT_THREE from './_constants/INT_THREE';
import call from './call';
import compose from './compose';
import define from './define';
import orderBy from './orderBy';
import spread from './spread';

const callReplace = call(_replace);
const orderArgs = orderBy(ARR_ORDER);
const internal = compose(callReplace, orderArgs, spread);
const replaceWith = define(internal, INT_THREE);

export default replaceWith;

