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
import compose from './compose';
import spread from './spread';

const merge = compose(args => _assign({}, ...args), spread);

export default merge;
