import test from 'tape';
import { iterate } from '../src';

test('Tests - iterate.js', t => {
    const foo = i => 2 ** i;
    t.deepEqual(iterate(foo, 1), [1], 'Length 1 okay');
    t.deepEqual(iterate(foo)(2), [1, 2], 'Length 2 okay');
    t.deepEqual(iterate(foo, 3), [1, 2, 4], 'Length 3 okay');
    t.end();
});
