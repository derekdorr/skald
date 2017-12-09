import test from 'tape';
import toArray from '../src/toArray';

test('Tests - toArray.js', t => {
    t.deepEqual(toArray(undefined, undefined), [], 'Undefined are filtered');
    t.deepEqual(toArray([1, 2]), [1, 2], '[1,2] is already an array');
    t.deepEqual(toArray(false, true), [false, true], 'false, true becomes array');
    t.deepEqual(toArray(0), [0], '0 becomes array');
    t.deepEqual(toArray(1, 2, 3), [1, 2, 3], '1,2,3 becomes array');
    t.end();
});
