/**
 * Subtract one number from another
 *
 * @module subtract
 * @func
 * @since 1.0.0
 * @param {number} a
 * @param {number} b
 * @return {function|number}
 * @example
 *
 *     subtract(3, 2); //=> 1
 *     subtract(2)(1); //=> 1
 */

import { INT_NEGATIVE_ONE } from 'permanent';
import INT_TWO from './_constants/INT_TWO';
import add from './add';
import executeWith from './executeWith';
import define from './define';
import identity from './identity';
import multiply from './multiply';

const negate = multiply(INT_NEGATIVE_ONE);
const pre = executeWith(add, identity, negate);
const subtract = define(pre, INT_TWO);

export default subtract;
