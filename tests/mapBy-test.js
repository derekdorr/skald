import test from 'tape';
import { mapBy } from '../src';

test('Tests - mapBy.js', t => {
    const foo = val => val + 1;
    t.deepEqual(mapBy(foo)([1, 2]), [2, 3], 'mapBy generates function');
    t.deepEqual(mapBy(foo, [3, 4]), [4, 5], 'mapBy can return final result');
    t.end();
});
