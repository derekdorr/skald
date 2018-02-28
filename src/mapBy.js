/**
 * Map elements in an array by function
 *
 * @module mapBy
 * @func
 * @since 1.9.0
 * @param {function} fn
 * @param {Array} arr
 * @return {function|Array}
 * @example
 *
 *     const foo = val => val + 1;
 *     mapBy(foo, [1, 2]); //=> [2, 3]
 *     mapBy(foo)([4, 5]); //=> [5, 6]
 */

import _map from './_internal/_map';
import reverse from './reverse';

const mapBy = reverse(_map, 2);

export default mapBy;
