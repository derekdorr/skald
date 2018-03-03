/**
 * Return exponent from one number to another
 *
 * @module power
 * @func
 * @since 1.20.0
 * @param {number} exponent
 * @param {number} base
 * @return {function|number}
 * @example
 *
 *     power(2, 3); //=> 9
 *     power(2)(2); //=> 4
 */

import define from './define';

const power = (exponent, base) => base ** exponent;

export default define(power);
