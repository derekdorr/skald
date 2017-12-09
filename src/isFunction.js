/**
 * Determine if value is function
 *
 * @module isFunction
 * @func
 * @since 1.0.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     isFunction(1); //=> false
 *     isFunction(() => ({})); //=> true
 */

import { STR_FUNCTION } from 'permanent';
import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const equalsFunction = equals(STR_FUNCTION);
const isFunction = compose(equalsFunction, typeOf);

export default isFunction;
