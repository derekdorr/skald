import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_BOOLEAN = 'boolean';
const equalsBoolean = equals(STR_BOOLEAN);
const isBoolean = compose(equalsBoolean, typeOf);

export default isBoolean;
