const toArray = (...args) => [].concat(...args).filter(val => val !== undefined);

export default toArray;
