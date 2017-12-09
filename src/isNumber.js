/**
 * Determine if value is function
 * 
 * @func
 * @since 1.0.0
 * @param {*}
 * @return {boolean}
 * @example
 * 
 *     isNumber(1); //=> true
 *     isNumber([]); //=> false
 */

import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_NUMBER = 'number';
const equalsNumber = equals(STR_NUMBER);
const isNumber = compose(equalsNumber, typeOf);

export default isNumber;
