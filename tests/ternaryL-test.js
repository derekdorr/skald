import test from 'tape';
import ternaryL from '../src/ternaryL';

test('Tests - ternaryL.js', t => {
    t.equal(ternaryL(true, 1, 2), 1, 'true returns 1');
    t.equal(ternaryL(false, 1, 2), 2, 'false returns 2');
    t.equal(ternaryL(true, 2)(3), 2, 'true returns 2');
    t.equal(ternaryL(false, 2)(3), 3, 'false returns 3');
    t.equal(ternaryL(true)(3, 4), 3, 'true returns 3');
    t.equal(ternaryL(false)(3, 4), 4, 'false returns 4');
    t.equal(ternaryL(true)(4)(5), 4, 'true returns 4');
    t.equal(ternaryL(false)(4)(5), 5, 'false returns 5');
    t.end();
});
