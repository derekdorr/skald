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
import INT_TWO from './_constants/INT_TWO';
import define from './define';

const has = define(_hasOwnProperty, INT_TWO);

export default has;
