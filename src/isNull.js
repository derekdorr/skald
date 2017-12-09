/**
 * Determine if value is null
 *
 * @module isNull
 * @func
 * @since 1.0.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     isNull(null); //=> true
 *     isNull({}); //=> false
 */

import { NULL } from 'permanent';
import curry from './curry';
import equals from './equals';

const isNull = curry(equals, NULL);

export default isNull;
