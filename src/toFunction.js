import isFunction from './isFunction';

const toFunction = val => (
    isFunction(val) ?
        val :
        () => val
);

export default toFunction;
