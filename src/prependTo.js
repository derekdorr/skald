/**
 * Prepend string to the beginning of another string
 *
 * @module prependTo
 * @func
 * @since 1.13.0
 * @param {string} str
 * @param {string} append
 * @returns {function|string}
 * @example
 *
 *     prependTo('foo', 'bar'); //=> 'barfoo'
 *     prependTo('bar')('baz'); //=> 'bazbar'
 */

import INT_TWO from './_constants/INT_TWO';
import appendTo from './appendTo';
import reverse from './reverse';

const prependTo = reverse(appendTo, INT_TWO);

export default prependTo;
