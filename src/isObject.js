import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_OBJECT = 'object';
const equalsObject = equals(STR_OBJECT);
const isObject = compose(equalsObject, typeOf);

export default isObject;
