/**
 * Detemine if value is object
 *
 * @module isObject
 * @func
 * @since 1.0.0
 * @param {*} val
 * @return {boolean}
 * @example
 *
 *     isObject({}); //=> true
 *     isObject(1); //=> false
 */

import { STR_OBJECT } from 'permanent';
import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const equalsObject = equals(STR_OBJECT);
const isObject = compose(equalsObject, typeOf);

export default isObject;
