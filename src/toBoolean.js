import curry from './curry';
import equals from './equals';
import ternary from './ternary';

const STR_FALSE = 'false';
const BOOL_FALSE = false;
const equalsFalse = curry(equals, STR_FALSE);
const toBoolean = value => ternary(
    () => !!value,
    BOOL_FALSE,
    equalsFalse(value),
);

export default toBoolean;
