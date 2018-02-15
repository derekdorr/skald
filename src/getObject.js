/**
 * Get an object with single property and value
 *
 * @module getObject
 * @func
 * @since 1.15.0
 * @param {string|number} prop
 * @param {*} value
 * @return {function|Object}
 * @example
 *
 *     getObject('a', 1); //=> { a: 1 }
 *     getProp('b')(2); //=> { b: 2 }
 */

import define from './define';

const pre = (prop, value) => ({ [prop]: value });
const getObject = define(pre);

export default getObject;
