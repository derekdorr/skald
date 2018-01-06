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

import define from './define';

const pre = (str, append) => `${str}${append}`;
const appendTo = define(pre);

export default appendTo;
