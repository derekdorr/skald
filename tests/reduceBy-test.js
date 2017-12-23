import test from 'tape';
import { reduceBy } from '../src';

test('Tests - reduceBy.js', t => {
    const foo = (acc, val) => acc + val;
    t.equal(reduceBy(foo, 1, [1, 1]), 3, 'reduceBy can return final value');
    t.equal(reduceBy(foo, 2)([2, 2]), 6, 'reduceBy returns function with 2 args');
    t.equal(reduceBy(foo)(3)([3, 3]), 9, 'reduceBy returns function with 1 arg');
    t.equal(reduceBy(foo)(4, [4, 4]), 12, 'reduceBy returns two argument func');
    t.end();
});
