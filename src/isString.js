/**
 * Determine if value is string
 *
 * @module isString
 * @func
 * @since 1.0.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     isString('foo'); //=> true;
 *     isString(true); //=> false;
 */

import { STR_STRING } from 'permanent';
import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const equalsString = equals(STR_STRING);
const isString = compose(equalsString, typeOf);

export default isString;
