import test from 'tape';
import { isNaN } from '../src';

test('Tests - isNaN.js', t => {
    t.equal(isNaN(1), false, '1 is not NaN');
    t.equal(isNaN('foo'), false, 'foo is not NaN');
    t.equal(isNaN(NaN), true, 'NaN is NaN');
    t.end();
});
