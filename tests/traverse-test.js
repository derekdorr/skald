import test from 'tape';
import { traverse } from '../src';

test('Tests - traverse.js', t => {
    const foo = {
        a: {
            d: 3,
        },
        b: {
            c: 2,
        },
    };
    t.equal(traverse(foo, ['a', 'd']), 3, 'got 3');
    t.equal(traverse(foo)(['b', 'c']), 2, 'got 2');
    t.equal(traverse(foo)(['e', 'f', 'g']), undefined, 'got undefined');
    t.end();
});
