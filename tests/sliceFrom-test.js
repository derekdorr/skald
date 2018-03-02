import test from 'tape';
import { sliceFrom } from '../src';

test('Tests - sliceFrom.js', t => {
    const foo = [1, 2, 3, 4];
    t.deepEqual(sliceFrom(0, 1, foo), [1], 'Got [1]');
    t.deepEqual(sliceFrom(0, 2)(foo), [1, 2], 'Got [1,2]');
    t.deepEqual(sliceFrom(0)(3)(foo), [1, 2, 3], 'Got [1,2,3]');
    t.deepEqual(sliceFrom(1)(2, foo), [2], 'Got [2]');
    t.end();
});
