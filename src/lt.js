/**
 * Determine if value is less than other value
 *
 * @module lt
 * @func
 * @since 1.0.0
 * @param {number|string} a
 * @param {number|string} b
 * @return {function|boolean}
 * @example
 *
 *     lt(1, 2); //=> true
 *     lt('a')('b'); //=> true
 */

import _lt from './_internal/_lt';
import define from './define';

const lt = define(_lt);

export default lt;
