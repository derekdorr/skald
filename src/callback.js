/**
 *
 * Take two arguments and if second argument is truthy, return first.
 *
 * @module callback
 * @func
 * @since 1.0.0
 * @param {*} cb
 * @param {*} predicate
 * @return {*}
 * @example
 *
 *     callback('foo', true); //=> 'foo'
 *     callback('foo', false); //=> null
 */

import { NULL } from 'permanent';
import ternary from './ternary';

const callback = ternary(NULL);

export default callback;
