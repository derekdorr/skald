import typeOf from './typeOf';
import equals from './equals';
import compose from './compose';

const STR_NUMBER = 'number';
const equalsNumber = equals(STR_NUMBER);
const isNumber = compose(equalsNumber, typeOf);

export default isNumber;
