/**
 * Split string to array by another string
 *
 * @module splitBy
 * @func
 * @since 1.13.0
 * @param {string} search
 * @param {string} str
 * @returns {function|Array}
 * @example
 *
 *     splitBy('.', 'foo.bar.baz'); //=> ['foo', 'bar', 'baz']
 *     splitBy(',')('1,2,3'); //=> ['1', '2', '3'];
 */

import _split from './_internal/_split';
import reverse from './reverse';

const splitBy = reverse(_split, 2);

export default splitBy;
