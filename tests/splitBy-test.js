import test from 'tape';
import { splitBy } from '../src';

test('Tests - splitBy.js', t => {
    t.deepEqual(splitBy('.', 'a.b'), ['a', 'b'], 'Got [a, b]');
    t.deepEqual(splitBy(',', '1,2,3'), ['1', '2', '3'], 'Got [1, 2, 3]');
    t.end();
});
