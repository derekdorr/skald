import test from 'tape';
import { getEmptyObj } from '../src';

test('Tests - getEmptyObj.js', t => {
    const foo = getEmptyObj();
    const bar = getEmptyObj();
    t.deepEqual(foo, {}, 'foo is {}');
    t.deepEqual(bar, {}, 'bar is {}');
    t.ok(foo !== bar, 'foo !== bar');
    t.end();
});
