import test from 'tape';
import { call } from '../src';

test('Tests - call.js', t => {
    const foo = (a, b) => a + b;
    t.equal(call(foo, [1, 2]), 3, 'Got 3!');
    t.equal(call(foo)([3, 3]), 6, 'Got 6!');
    t.end();
});
