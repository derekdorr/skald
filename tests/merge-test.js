import test from 'tape';
import { merge } from '../src';

test('Tests - merge.js', t => {
    const foo = { a: 1 };
    const bar = { b: 2 };
    const baz = { c: 3 };
    const bat = { a: 2 };
    t.deepEqual(merge(foo, bar), { a: 1, b: 2 }, 'foo and bar merged');
    t.deepEqual(merge(foo, baz), { a: 1, c: 3 }, 'foo and baz merged');
    t.deepEqual(merge(foo, bat), { a: 2 }, 'foo and bat merged');
    t.deepEqual(merge(foo, bar, baz), { a: 1, b: 2, c: 3 }, 'foo, bar, baz merged');
    t.end();
});
