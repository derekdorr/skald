/**
 * Safely traverse object nested properties
 *
 * @module traverseR
 * @func
 * @since 1.14.0
 * @param {Array<string>} path
 * @param {Object} obj
 * @return {*}
 * @example
 *
 *     traverse(['a', 'b', 'c'], {}); //=> undefined
 *     traverse(['a'])({ a: 1 }); //=> 1
 */

import INT_TWO from './_constants/INT_TWO';
import reverse from './reverse';
import traverse from './traverse';

const traverseR = reverse(traverse, INT_TWO);

export default traverseR;

