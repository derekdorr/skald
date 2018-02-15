/**
 * Return true if object has key
 *
 * @module has
 * @func
 * @since 1.9.0
 * @param {Object} obj
 * @param {string} key
 * @return {function|boolean}
 * @example
 *
 *    has({ a: 1 }, 'a'); //=> true
 *    has({ a: 1 })('a'); //=> true
 *    has({ a: 1 })('b'); //=> false
 */

import _hasOwnProperty from './_internal/_hasOwnProperty';
import define from './define';

const has = define(_hasOwnProperty, 2);

export default has;
