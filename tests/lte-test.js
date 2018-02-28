import test from 'tape';
import { lte } from '../src';

test('Tests - lte.js', t => {
    t.equal(lte(1, 2), true, '1 is less than 2');
    t.equal(lte(2)(3), true, '2 is less than 3');
    t.equal(lte(2, 1), false, '2 is not less than 1');
    t.equal(lte(3)(2), false, '3 is not less than 2');
    t.equal(lte(1, 1), true, '1 is equal to 1');
    t.equal(lte(2)(2), true, '2 is equal to 2');
    t.end();
});
