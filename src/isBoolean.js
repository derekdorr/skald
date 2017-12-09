/**
 * @module isBoolean
 * Determine if value is boolean;
 *
 * @func
 * @since 1.0.0
 * @param {*}
 * @return {boolean}
 * @example
 *
 *     isBoolean(1); //=> false
 *     isBoolean(false); //=> true
 */

import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_BOOLEAN = 'boolean';
const equalsBoolean = equals(STR_BOOLEAN);
const isBoolean = compose(equalsBoolean, typeOf);

export default isBoolean;
