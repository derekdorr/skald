/**
 *
 * Take two arguments and if second argument is truthy, return first
 * based on val
 *
 * @module callbackWith
 * @func
 * @since 1.9.0
 * @param {*} cb
 * @param {*} predicate
 * @param {*} val
 * @return {*}
 * @example
 *
 *     callbackWith(a => a, true, 3); //=> 3
 *     callbackWith(a => a, false, 3); //=> null
 */

import { NULL } from 'permanent';
import ternaryWith from './ternaryWith';

const callbackWith = ternaryWith(NULL);

export default callbackWith;
