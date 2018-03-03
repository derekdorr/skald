import test from 'tape';
import { setProp } from '../src';

test('Tests - setProp.js', t => {
    const foo = { a: 1 };
    t.deepEqual(setProp('b', 2, foo), { a: 1, b: 2 }, 'b set correctly');
    t.deepEqual(setProp('c')(3, foo), { a: 1, c: 3 }, 'c set correctly');
    t.deepEqual(setProp('d')(4)(foo), { a: 1, d: 4 }, 'd set correctly');
    t.deepEqual(foo, { a: 1 }, 'foo still foo');
    t.end();
});
