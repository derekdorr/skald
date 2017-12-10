import test from 'tape';
import { isArray } from '../src';

test('Tests - isArray.js', t => {
    t.equal(isArray([]), true, '[] is array');
    t.equal(isArray([1]), true, '[1] is array');
    t.equal(isArray({}), false, '{} is not array');
    t.equal(isArray(true), false, 'true is not array');
    t.end();
});
