/**
 * Determine if value is boolean;
 *
 * @module isBoolean
 * @func
 * @since 1.0.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     isBoolean(1); //=> false
 *     isBoolean(false); //=> true
 */

import { STR_BOOLEAN } from 'permanent';
import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const equalsBoolean = equals(STR_BOOLEAN);
const isBoolean = compose(equalsBoolean, typeOf);

export default isBoolean;
