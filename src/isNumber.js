/**
 * Determine if value is function
 *
 * @module isNumber
 * @func
 * @since 1.0.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     isNumber(1); //=> true
 *     isNumber([]); //=> false
 */

import { STR_NUMBER } from 'permanent';
import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const equalsNumber = equals(STR_NUMBER);
const isNumber = compose(equalsNumber, typeOf);

export default isNumber;
