import define from './define';
import isObject from './isObject';
import ternary from './ternary';

const UNDEF = undefined;

const traverse = (obj, path) => path.reduce((acc, seg) => ternary(
    UNDEF,
    () => acc[seg],
    isObject(acc),
), obj);

const check = define(traverse);

export default check;
