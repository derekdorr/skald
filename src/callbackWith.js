/**
 *
 * Take two arguments and if second argument is truthy, return first
 * based on val
 *
 * @module callback
 * @func
 * @since 1.9.0
 * @param {*} cb
 * @param {*} predicate
 * @param {*} val
 * @return {*}
 * @example
 *
 *     callback('foo', true); //=> 'foo'
 *     callback('foo', false); //=> null
 */

import { NULL } from 'permanent';
import ternaryWith from './ternaryWith';

const callbackWith = ternaryWith(NULL);

export default callbackWith;
