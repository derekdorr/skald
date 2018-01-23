/**
 * Replace search with new value in string
 *
 * @module replaceWith
 * @func
 * @since 1.6.0
 * @param {string|RegExp} search
 * @param {string} rep
 * @param {string} str
 * @return {string|function}
 * @example
 *
 *     replaceWith('f', 'b', 'foo'); //=> 'boo'
 *     replaceWith(/o/g)('a')('foo'); //=> 'faa'
 */
 
 import _replace from './_internal/_replace';
 import define from './define';
 
 const internal = (search, rep, str) => _replace(str, search, rep);
 const replaceWith = define(internal);
 
 export default replaceWith;
 
