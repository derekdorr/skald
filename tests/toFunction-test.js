import test from 'tape';
import { toFunction } from '../src';

test('Tests - toFunction.js', t => {
    t.equal(toFunction(null)(), null, 'null becomes null');
    t.equal(toFunction(1)(), 1, '1 becomes 1');
    t.equal(toFunction((a, b) => a + b)(1, 2), 3, '1 + 2 = 3');
    t.equal(toFunction()(), undefined, 'undefined becomes undefined');
    t.end();
});
