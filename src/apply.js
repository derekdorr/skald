/**
 * Apply functions from an array to corresponding index in other array
 *
 * @module apply
 * @func
 * @since 1.11.0
 * @param {Array} fns
 * @param {Array} vals
 * @returns {function|array}
 * @example
 *
 *     const add1 = a => a + 1;
 *     const add2 = a => a + 2;
 *     apply([add1, add2], [0, 0]); //=> [1, 2];
 *     apply([add1])([1, 2, 3]); //=> [2, 2, 3];
 */

import _assign from './_internal/_assign';
import _fill from './_internal/_fill';
import _len from './_internal/_len';
import _max from './_internal/_max';
import _newArray from './_internal/_newArray';
import define from './define';
import identity from './identity';
import iterate from './iterate';

const getFnsArray = len => _fill(_newArray(len), identity);

const internal = (fns, vals) => {
    const fnsLength = _len(fns);
    const valsLength = _len(vals);
    const length = _max(fnsLength, valsLength);
    const funcs = _assign(getFnsArray(length), fns);
    const values = _assign(_newArray(length), vals);
    const applyAt = i => funcs[i](values[i]);
    return iterate(applyAt, length);
};
const apply = define(internal);

export default apply;
