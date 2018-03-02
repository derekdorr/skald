import test from 'tape';
import { fillBy } from '../src';

test('Tests - fillBy.js', t => {
    t.deepEqual(fillBy(1, Array(2)), [1, 1], 'Got [1, 1]');
    t.deepEqual(fillBy(0)(Array(2)), [0, 0], 'Got [0, 0]');
    t.end();
});
