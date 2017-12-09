import test from 'tape';
import isUndefined from '../src/isUndefined';

test('Tests - isUndefined.js', t => {
    t.equal(isUndefined(undefined), true, 'undefined is undefined');
    t.equal(isUndefined({}), false, '{} is not undefined');
    t.equal(isUndefined([]), false, '[] is not undefined');
    t.equal(isUndefined(null), false, 'null is not undefined');
    t.equal(isUndefined(0), false, '0 is not undefined');
    t.end();
});
