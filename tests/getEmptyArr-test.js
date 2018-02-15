import test from 'tape';
import { getEmptyArr } from '../src';

test('Tests - getEmptyArr.js', t => {
    const foo = getEmptyArr();
    const bar = getEmptyArr();
    t.deepEqual(foo, [], 'foo is []');
    t.deepEqual(bar, [], 'bar is []');
    t.ok(foo !== bar, 'foo !== bar');
    t.end();
});
