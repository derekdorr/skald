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
import curry from './curry';
import equals from './equals';
import ternary from './ternary';

const equalsFalse = curry(equals, STR_FALSE);
const toBoolean = value => ternary(
    () => !!value,
    BOOL_FALSE,
    equalsFalse(value),
);

export default toBoolean;
