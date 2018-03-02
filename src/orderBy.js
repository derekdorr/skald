/**
 * Generate array based on template of indexes and source
 *
 * @module orderBy
 * @func
 * @since 1.19.0
 * @param {Array} template
 * @param {Array} src
 * @returns {function|Array}
 * @example
 *
 *     orderBy([1, 2, 0], ['a', 'b', 'c']); //=> ['b', 'c', 'a'];
 *     orderBy([2, 0, 1])(['d', 'e', 'f']); //=> ['f', 'd', 'e'];
 */

import _concat from './_internal/_concat';
import _reduce from './_internal/_reduce';
import define from './define';

const internal = (template, src) => _reduce(
    template,
    (acc, val) => _concat(acc, [src[val]]),
    [],
);

const orderBy = define(internal);

export default orderBy;
