import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_FUNCTION = 'function';
const equalsFunction = equals(STR_FUNCTION);
const isFunction = compose(equalsFunction, typeOf);

export default isFunction;
