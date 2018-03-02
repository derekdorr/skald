import test from 'tape';
import { orderBy } from '../src';

test('Tests - orderBy.js', t => {
    t.deepEqual(orderBy([0, 1, 2], ['a', 'b', 'c']), ['a', 'b', 'c'], '#1 correct');
    t.deepEqual(orderBy([1, 0])(['a', 'b']), ['b', 'a'], '#2 correct');
    t.deepEqual(orderBy([0, 0, 0], ['a', 'b']), ['a', 'a', 'a'], '#3 correct');
    t.end();
});
