/**
 * Divide two numbers
 *
 * @module divide
 * @func
 * @since 1.0.0
 * @param {number} a
 * @param {number} b
 * @return {number|function}
 * @example
 *
 *     divide(9, 3); //=> 3
 *     divide(4)(2); //=> 2
 */

import { INT_NEGATIVE_ONE } from 'permanent';
import INT_TWO from './_constants/INT_TWO';
import define from './define';
import executeWith from './executeWith';
import identity from './identity';
import multiply from './multiply';
import power from './power';

const invert = power(INT_NEGATIVE_ONE);
const pre = executeWith(multiply, identity, invert);
const divide = define(pre, INT_TWO);

export default divide;
