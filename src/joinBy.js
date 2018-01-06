/**
 * Join array to string, delimited by other string
 *
 * @module joinBy
 * @func
 * @since 1.13.0
 * @param {string} delimiter
 * @param {Array} arr
 * @returns {function|string}
 * @example
 *
 *     joinBy('.', ['foo', 'bar', 'baz']); //=> 'foo.bar.baz'
 *     joinBy(',')([1, 2, 3]); //=> '1.2.3';
 */

import _join from './_internal/_join';
import reverse from './reverse';

const joinBy = reverse(_join, 2);

export default joinBy;
