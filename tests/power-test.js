import test from 'tape';
import { power } from '../src';

test('Tests - power.js', t => {
    t.equal(power(3, 2), 8, '2 ** 3 = 8');
    t.equal(power(2)(2), 4, '2 ** 2 = 4');
    t.end();
});
