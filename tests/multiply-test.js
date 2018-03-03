import test from 'tape';
import { multiply } from '../src';

test('Tests - multiply.js', t => {
    t.equal(multiply(2, 3), 6, '2 * 3 = 6');
    t.equal(multiply(3)(3), 9, '3 * 3 = 9');
    t.equal(multiply()(4)(4), 16, '4 * 4 = 16');
    t.end();
});
