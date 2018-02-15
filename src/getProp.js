/**
 * Get property of an object
 *
 * @module getProp
 * @func
 * @since 1.15.0
 * @param {string|number} prop
 * @param {Object} obj
 * @return {function|*}
 * @example
 *
 *     getProp('a', { a: 1 }); //=> 1
 *     getProp('b')({ b: 2 }); //=> 2
 */

import define from './define';

const pre = (prop, obj) => obj[prop];
const getProp = define(pre);

export default getProp;
