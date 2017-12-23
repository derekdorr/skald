import test from 'tape';
import { ternaryWith } from '../src';

test('Tests - ternaryWith.js', t => {
    const foo = val => val + 1;
    const bar = val => val - 1;
    t.equal(ternaryWith(bar, foo, true, 3), 4, 'Got 4');
    t.equal(ternaryWith(bar, foo, true)(2), 3, 'Got 3');
    t.equal(ternaryWith(bar, foo)(true, 1), 2, 'Got 2');
    t.equal(ternaryWith(bar)(foo)(true)(0), 1, 'Got 1');
    t.equal(ternaryWith(bar)(foo)(false)(0), -1, 'Got -1');
    t.end();
});
