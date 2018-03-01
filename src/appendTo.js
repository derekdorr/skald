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

import add from './add';
import define from './define';
import executeWith from './executeWith';
import toString from './toString';

const pre = executeWith(add, toString, toString);
const appendTo = define(pre, 2);

export default appendTo;
