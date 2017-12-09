import test from 'tape';
import gte from '../src/gte';

test('Tests - gte.js', t => {
    t.equal(gte(1, 2), false, '1 is not greater than 2');
    t.equal(gte(2)(3), false, '2 is not greater than 3');
    t.equal(gte(2, 1), true, '2 is greater than 1');
    t.equal(gte(3)(2), true, '3 is greater than 2');
    t.equal(gte(1, 1), true, '1 is equal to 1');
    t.equal(gte(2)(2), true, '2 is equal to 2');
    t.end();
});
