/**
 * Returns true if string is in string or array
 *
 * @method includes
 * @func
 * @since 1.4.0
 * @param {string|number} search
 * @param {string|Array} val
 * @returns {boolean|function}
 * @example
 *
 *     includes('h', 'hello'); //=> true
 *     includes('a')('apple'); //=> true
 */

import { BOOL_FALSE, INT_ONE, INT_NEGATIVE_ONE } from 'permanent';
import INT_TWO from './_constants/INT_TWO';
import STR_INDEXOF from './_constants/STR_INDEXOF';
import _indexOf from './_internal/_indexOf';
import call from './call';
import compose from './compose';
import define from './define';
import getProp from './getProp';
import isFunction from './isFunction';
import notEquals from './notEquals';
import reverse from './reverse';
import spread from './spread';
import ternaryWith from './ternaryWith';

const notNegativeOne = notEquals(INT_NEGATIVE_ONE);
const getIndexOf = getProp(STR_INDEXOF);
const getSecondArg = getProp(INT_ONE);
const checkIndexOf = compose(isFunction, getIndexOf, getSecondArg);
const indexOf = reverse(_indexOf, INT_TWO);
const indexNotNegativeOne = compose(notNegativeOne, indexOf);
const callIndexNotNegativeOne = call(indexNotNegativeOne);
const checkIndex = ternaryWith(BOOL_FALSE, callIndexNotNegativeOne, checkIndexOf);
const internal = compose(checkIndex, spread);
const includes = define(internal, INT_TWO);

export default includes;
