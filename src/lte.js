import define from './define';

const pre = (a, b) => a <= b;
const lte = define(pre);

export default lte;
