/**
 * Determine if at least one argument or array value is truthy
 *
 * @module or
 * @func
 * @since 1.0.0
 * @param {...*} args
 * @returns {boolean}
 * @example
 *
 *     or(true, false, false); //=> true
 *     or([false, false, true]); //=> true
 */
import { INT_ONE, INT_ZERO } from 'permanent';
import _len from './_internal/_len';
import _some from './_internal/_some';
import compose from './compose';
import equals from './equals';
import ternaryWith from './ternaryWith';
import toBoolean from './toBoolean';

const equalsOne = equals(INT_ONE);
const lengthEqualsOne = compose(equalsOne, _len);
const allTrue = arr => _some(arr, toBoolean);

const or = (...args) => ternaryWith(
    allTrue,
    () => or(...args[INT_ZERO]),
    lengthEqualsOne,
)(args);

export default or;
