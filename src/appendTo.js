/**
 * Append string to the end of another string
 *
 * @module appendTo
 * @func
 * @since 1.13.0
 * @param {string} str
 * @param {string} append
 * @returns {function|string}
 * @example
 *
 *     appendTo('foo', 'bar'); //=> 'foobar'
 *     appendTo('bar')('baz'); //=> 'barbaz'
 */

import INT_TWO from './_constants/INT_TWO';
import add from './add';
import define from './define';
import executeWith from './executeWith';
import toString from './toString';

const pre = executeWith(add, toString, toString);
const appendTo = define(pre, INT_TWO);

export default appendTo;
