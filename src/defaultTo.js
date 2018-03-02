/**
 * Sets default value if passed value is falsy
 *
 * @module defaultTo
 * @func
 * @since 1.2.0
 * @param {*} def
 * @param {*} val
 * @return {*}
 * @example
 *
 *     defaultTo(5, undefined); //=> 5
 *     defaultTo(3)(4); //=> 4
 */

import _or from './_internal/_or';
import INT_TWO from './_constants/INT_TWO';
import reverse from './reverse';

const defaultTo = reverse(_or, INT_TWO);

export default defaultTo;
