import define from './define';

const pre = (a, b) => a >= b;
const gte = define(pre);

export default gte;
