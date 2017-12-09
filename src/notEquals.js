/**
 * Return true if two values are not equal
 *
 * @module notEquals
 * @func
 * @since 1.1.0
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 * @example
 *
 *     notEquals(1, 2); //=> true
 *     notEquals(3)(4); //=> true
 */

import compose from './compose';
import equals from './equals';
import not from './not';

const notEquals = compose(not, equals);

export default notEquals;
