import define from './define';

const curry = (fn, ...args) => define(fn)(...args);

export default curry;
