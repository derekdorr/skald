import test from 'tape';
import { andWith } from '../src';

test('Tests - andWith.js', t => {
    const foo = val => val > 5;
    const bar = val => val < 10;
    const baz = val => val === 7;
    t.equal(andWith([foo, bar], 6), true, '6 is true for foo and bar');
    t.equal(andWith([foo, bar, baz])(7), true, '7 is true for foo, bar, and baz');
    t.equal(andWith([foo, baz], 1), false, '1 is not true for foo and baz');
    t.equal(andWith([baz, bar])(2), false, '2 is not true for baz and bar');
    t.end();
});
