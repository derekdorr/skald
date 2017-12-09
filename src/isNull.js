/**
 * Determine if value is null
 *
 * @module isNull
 * @func
 * @since 1.0.0
 * @param {*}
 * @return {boolean}
 * @example
 *
 *     isNull(null); //=> true
 *     isNull({}); //=> false
 */

import curry from './curry';
import equals from './equals';

const NULL = null;
const isNull = curry(equals, NULL);

export default isNull;
