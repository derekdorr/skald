import test from 'tape';
import gt from '../src/gt';

test('Tests - gt.js', t => {
    t.equal(gt(1, 2), false, '1 is not greater than 2');
    t.equal(gt(2)(3), false, '2 is not greater than 3');
    t.equal(gt(2, 1), true, '2 is greater than 1');
    t.equal(gt(3)(2), true, '3 is greater than 2');
    t.end();
});
