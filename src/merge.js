/**
 * Returns new object, which is a shallow merge of multiple objects
 *
 * @module merge
 * @func
 * @since 1.16.0
 * @param {...Object} args
 * @return {Object}
 * @example
 *
 *     merge({ a: 1 }, { b: 2}); //=> { a: 1, b: 2 }
 */

import _assign from './_internal/_assign';

const merge = (...args) => _assign({}, ...args);

export default merge;
