/**
 * Reduce array to new value by function
 *
 * @module reduceBy
 * @func
 * @since 1.9.0
 * @param {function} fn
 * @param {*} accumulator
 * @param {Array} arr
 * @return {function|*}
 * @example
 *
 *     const foo = (acc, val) = acc + val;
 *     reduceBy(foo, 1, [1, 1]); //=> 3
 *     reduceBy(foo, 2)([2, 2]); //=> 6
 *     reduceBy(foo)(3)([3, 3]); //=> 9
 */

import _reduce from './_internal/_reduce';
import ARR_ORDER from './_constants/ARR_ORDER';
import INT_THREE from './_constants/INT_THREE';
import call from './call';
import compose from './compose';
import define from './define';
import orderBy from './orderBy';
import spread from './spread';

const callReduce = call(_reduce);
const orderArgs = orderBy(ARR_ORDER);
const internal = compose(callReduce, orderArgs, spread);
const reduce = define(internal, INT_THREE);

export default reduce;
