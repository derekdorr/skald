import define from './define';

const pre = (a, b) => a === b;
const equals = define(pre);

export default equals;
