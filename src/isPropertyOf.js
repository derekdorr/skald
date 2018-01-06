/**
 * Determine if string is property of object
 *
 * @module isPropertyOf
 * @func
 * @since 1.13.0
 * @param {string} key
 * @param {Object} obj
 * @return {boolean}
 * @example
 *
 *     isPropertyOf('foo', { foo: 'a' }); //=> true
 *     isPropertyOf('foo')({ bar: 'b' }); //=> false
 */

import _hasOwnProperty from './_internal/_hasOwnProperty';
import reverse from './reverse';

const isPropertyOf = reverse(_hasOwnProperty, 2);

export default isPropertyOf;
