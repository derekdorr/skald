/**
 * Returns a new array, which is a merge of at least two arrays
 *
 * @module concat
 * @func
 * @since 1.16.0
 * @param {...Array} args
 * @return {function|Array}
 * @example
 *
 *     const([1, 2], [3, 4]); //=> [1, 2, 3, 4]
 */

import _concat from './_internal/_concat';
import define from './define';

const concat = define(_concat, 2);
export default concat;
