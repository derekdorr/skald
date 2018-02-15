import test from 'tape';
import { concat } from '../src';

test('Tests - concat.js', t => {
    const foo = [1, 2];
    const bar = [3, 4];
    const baz = [5, 6];
    t.deepEqual(concat(foo, bar), [1, 2, 3, 4], 'Got [1, 2, 3, 4]');
    t.deepEqual(concat(bar, baz), [3, 4, 5, 6], 'Got [3, 4, 5, 6]');
    t.deepEqual(concat(foo, bar, baz), [1, 2, 3, 4, 5, 6], 'Got [1, 2, 3, 4, 5, 6]');
    t.end();
});
