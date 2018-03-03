/**
 * Returns a copy of an object with a new name / value pair
 *
 * @module setProp
 * @func
 * @since 1.21.0
 * @param {string|number} prop
 * @param {*} value
 * @param {Object} obj
 * @return {function|Object}
 * @example
 *
 *     setProp('a', 1, {}); //=> { a: 1 }
 *     getProp('b')(2)({}); //=> { b: 2 }
 */
 
import define from './define';
import merge from './merge';

const internal = (prop, value, obj) => {
    const copy = merge(obj);
    copy[prop] = value;
    return copy;
};
const setProp = define(internal);

export default setProp;
