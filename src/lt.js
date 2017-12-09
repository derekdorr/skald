import define from './define';

const pre = (a, b) => a < b;
const lt = define(pre);

export default lt;
