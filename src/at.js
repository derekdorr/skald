/**
 * Returns copy of entry or character at given index in string or array
 *
 * @module at
 * @func
 * @since 1.5.0
 * @param {number} index
 * @param {Array|string} val
 * @return {*}
 * @Example
 *
 *     at(2, 'foo'); //=> 'o'
 *     at(1)([0, 1, 2]); //=> 1
 */

import { INT_ONE, INT_ZERO, STR_EMPTY } from 'permanent';
import _slice from './_internal/_slice';
import add from './add';
import defaultTo from './defaultTo';
import define from './define';
import isArray from './isArray';
import isString from './isString';
import or from './or';
import ternary from './ternary';
import toNumber from './toNumber';

const addOne = add(INT_ONE);
const defaultToEmptyString = defaultTo(STR_EMPTY);
const failToString = ternary(STR_EMPTY);

const pre = (index, val) => {
    const ind = toNumber(index);
    const isValArray = isArray(val);
    const isValString = isString(val);
    return failToString(
        () => defaultToEmptyString(_slice(val, ind, addOne(ind))[INT_ZERO]),
        or(isValArray, isValString),
    );
};

const at = define(pre);

export default at;
