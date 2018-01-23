import test from 'tape';
import { traverseR } from '../src';

test('Tests - traverseR.js', t => {
    const foo = {
        a: {
            d: 3,
        },
        b: {
            c: 2,
        },
    };
    t.equal(traverseR(['a', 'd'], foo), 3, 'got 3');
    t.equal(traverseR(['b', 'c'])(foo), 2, 'got 2');
    t.equal(traverseR(['e', 'f', 'g'])(foo), undefined, 'got undefined');
    t.end();
});
