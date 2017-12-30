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
import and from './and';
import compose from './compose';
import define from './define';
import executeWith from './executeWith';
import isArray from './isArray';
import isNumber from './isNumber';
import isString from './isString';
import orWith from './orWith';
import ternary from './ternary';

const addOne = add(INT_ONE);
const atZero = arr => arr[INT_ZERO];
const isStringOrArray = orWith([isString, isArray]);
const failToString = ternary(STR_EMPTY);
const sliceAtZero = compose(atZero, _slice);
const predicate = executeWith(and, isStringOrArray, isNumber);

const internal = (index, val) => failToString(
    () => sliceAtZero(val, index, addOne(index)),
    predicate(val, index),
);

const at = define(internal);

export default at;
