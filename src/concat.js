/**
 * Returns a new array, which is a merge of multiple arrays
 *
 * @module concat
 * @func
 * @since 1.16.0
 * @param {...Array} args
 * @return {Array}
 * @example
 *
 *     const([1, 2], [3, 4]); //=> [1, 2, 3, 4]
 */

import _concat from './_internal/_concat';

export default _concat;
