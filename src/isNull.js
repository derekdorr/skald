import curry from './curry';
import equals from './equals';

const NULL = null;
const isNull = curry(equals, NULL);

export default isNull;
