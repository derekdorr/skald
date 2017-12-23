/**
 * Returns boolean value and converts string 'false' to false
 *
 * @module toBoolean
 * @func
 * @since 1.0.0
 * @param {*} value
 * @return {boolean}
 * @example
 *
 *     toBoolean('false'); //=> false
 *     toBoolean({}); //=> true
 */

import { BOOL_FALSE, STR_FALSE } from 'permanent';
import compose from './compose';
import equals from './equals';
import not from './not';
import ternaryWith from './ternaryWith';

const notNot = compose(not, not);
const equalsFalse = equals(STR_FALSE);
const toBoolean = ternaryWith(notNot, BOOL_FALSE, equalsFalse);

export default toBoolean;
