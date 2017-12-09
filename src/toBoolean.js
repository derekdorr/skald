/**
 * @module toBoolean
 * Returns boolean value and converts string 'false' to false
 *
 * @func
 * @since 1.0.0
 * @param {*} value
 * @return {boolean}
 * @example
 *
 *     toBoolean('false'); //=> false
 *     toBoolean({}); //=> true
 */

import curry from './curry';
import equals from './equals';
import ternary from './ternary';

const STR_FALSE = 'false';
const BOOL_FALSE = false;
const equalsFalse = curry(equals, STR_FALSE);
const toBoolean = value => ternary(
    () => !!value,
    BOOL_FALSE,
    equalsFalse(value),
);

export default toBoolean;
