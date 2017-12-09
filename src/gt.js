import define from './define';

const pre = (a, b) => a > b;
const gt = define(pre);

export default gt;
