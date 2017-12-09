import define from './define';
import toFunction from './toFunction';

const internal = (failure, success, predicate) =>
    (toFunction(predicate)() ?
        toFunction(success)() :
        toFunction(failure)());

const ternary = define(internal);

export default ternary;
