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

import { STR_EMPTY } from 'permanent';
import INT_TWO from './_constants/INT_TWO';
import and from './and';
import call from './call';
import compose from './compose';
import define from './define';
import executeWith from './executeWith';
import getProp from './getProp';
import isArray from './isArray';
import isNumber from './isNumber';
import isString from './isString';
import orWith from './orWith';
import spread from './spread';
import ternaryWith from './ternaryWith';

const isStringOrArray = orWith([isString, isArray]);
const checkArgs = executeWith(and, isNumber, isStringOrArray);
const callCheckArgs = call(checkArgs);
const callGetProp = call(getProp);
const getValue = ternaryWith(STR_EMPTY, callGetProp, callCheckArgs);
const internal = compose(getValue, spread);

const at = define(internal, INT_TWO);

export default at;
