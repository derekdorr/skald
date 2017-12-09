import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_STRING = 'string';
const equalsString = equals(STR_STRING);
const isString = compose(equalsString, typeOf);

export default isString;
