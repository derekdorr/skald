import curry from './curry';
import isUndefined from './isUndefined';
import ternary from './ternary';

const STR_EMPTY = '';
const concatToEmpty = val => STR_EMPTY.concat(val);
const toString = val => ternary(curry(concatToEmpty, val), STR_EMPTY)(isUndefined(val));

export default toString;
