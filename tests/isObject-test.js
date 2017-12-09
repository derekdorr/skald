import test from 'tape';
import isObject from '../src/isObject';

test('Tests - isObject.js', t => {
    t.equal(isObject(null), true, 'null is object');
    t.equal(isObject({}), true, '{} is object');
    t.equal(isObject([]), true, '[] is object');
    t.equal(isObject(false), false, 'false is not object');
    t.equal(isObject('foo'), false, 'foo is not object');
    t.end();
});
