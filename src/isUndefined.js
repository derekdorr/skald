/**
 * @module isUndefined
 * Determine if value is undefined
 *
 * @func
 * @since 1.0.0
 * @param {*}
 * @return {boolean}
 * @example
 *
 *     isUndefined(undefined); //=> true
 *     isUndefined(true); //=> false
 */

import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_UNDEFINED = 'undefined';
const equalsUndefined = equals(STR_UNDEFINED);
const isUndefined = compose(equalsUndefined, typeOf);

export default isUndefined;
