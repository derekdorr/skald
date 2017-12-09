/**
 * Return true if two values are not equal
 *
 * @module notEquals
 * @func
 * @since 1.1.0
 * @param {*} a
 * @param {*} b
 * @return {function|boolean}
 * @example
 *
 *     notEquals(1, 2); //=> true
 *     notEquals(3)(4); //=> true
 */

import compose from './compose';
import define from './define';
import equals from './equals';
import not from './not';

const pre = compose(not, equals);
const notEquals = define(pre, 2);

export default notEquals;
