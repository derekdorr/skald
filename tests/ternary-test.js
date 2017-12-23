import test from 'tape';
import { ternary } from '../src';

test('Tests - ternary.js', t => {
    t.equal(ternary(2, 1, true), 1, 'true returns 1');
    t.equal(ternary(2, 1, false), 2, 'false returns 2');
    t.equal(ternary(3, 2)(true), 2, 'true returns 2');
    t.equal(ternary(3, 2)(false), 3, 'false returns 3');
    t.equal(ternary(4)(3, true), 3, 'true returns 3');
    t.equal(ternary(4)(3, false), 4, 'false returns 4');
    t.equal(ternary(5)(4)(true), 4, 'true returns 4');
    t.equal(ternary(5)(4)(false), 5, 'false returns 5');
    t.equal(ternary(2, 1, () => false), 2, 'false predicate returns 2');
    t.end();
});
