import test from 'tape';
import { isPropertyOf } from '../src';

test('Tests - isPropertyOf.js', t => {
    const foo = { a: 1, b: 2 };
    const bar = { c: 3 };
    t.equal(isPropertyOf('a', foo), true, 'a is property of foo');
    t.equal(isPropertyOf('b')(foo), true, 'b is property of foo');
    t.equal(isPropertyOf('c')(foo), false, 'c is not property of foo');
    t.equal(isPropertyOf('c')(bar), true, 'c is property of bar');
    t.end();
});
