import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_UNDEFINED = 'undefined';
const equalsUndefined = equals(STR_UNDEFINED);
const isUndefined = compose(equalsUndefined, typeOf);

export default isUndefined;
