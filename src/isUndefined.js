/**
 * Determine if value is undefined
 *
 * @module isUndefined
 * @func
 * @since 1.0.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     isUndefined(undefined); //=> true
 *     isUndefined(true); //=> false
 */

import { STR_UNDEFINED } from 'permanent';
import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const equalsUndefined = equals(STR_UNDEFINED);
const isUndefined = compose(equalsUndefined, typeOf);

export default isUndefined;
