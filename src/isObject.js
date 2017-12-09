/**
 * Detemine if value is object
 *
 * @func
 * @since 1.0.0
 * @param {*}
 * @return {boolean}
 * @example
 *
 *     isObject({}); //=> true
 *     isObject(1); //=> false
 */

import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_OBJECT = 'object';
const equalsObject = equals(STR_OBJECT);
const isObject = compose(equalsObject, typeOf);

export default isObject;
