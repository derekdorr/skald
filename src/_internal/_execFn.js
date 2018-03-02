const _execFn = key => (val, ...args) => val[key](...args);

export default _execFn;
