/**
 * Determine if value is NaN
 *
 * @module isNaN
 * @func
 * @since 1.0.0
 * @param {number} val
 * @return {boolean}
 * @example
 *
 *     isNaN(NaN); //=> true
 *     isNaN(1); //=> false
 */

import _isNaN from './_internal/_isNaN';

export default _isNaN;
