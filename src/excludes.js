/**
 * Returns true if string is not in string or array
 *
 * @method excludes
 * @func
 * @since 1.4.0
 * @param {string|number} search
 * @param {string|Array} val
 * @returns {boolean|function}
 * @example
 *
 *     excludes('h', 'hello'); //=> false
 *     excludes('a')('apple'); //=> false
 */

import INT_TWO from './_constants/INT_TWO';
import compose from './compose';
import define from './define';
import includes from './includes';
import not from './not';

const internal = compose(not, includes);
const excludes = define(internal, INT_TWO);

export default excludes;
