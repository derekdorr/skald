import test from 'tape';
import { apply } from '../src';

test('Tests - apply.js', t => {
    const add1 = a => a + 1;
    const add2 = a => a + 2;
    t.deepEqual(apply([add1, add2], [0, 0]), [1, 2], 'add1(0), add2(0)');
    t.deepEqual(apply([add1, add2])([1, 1]), [2, 3], 'add1(1), add2(1)');
    t.deepEqual(apply([add1])([2, 2]), [3, 2], 'add1(2), identity(2)');
    t.deepEqual(apply([add1, add2], [3])[0], 4, 'add1(3), add2(undefined)');
    t.end();
});
