import test from 'tape';
import { spread } from '../src';

test('Tests - spread.js', t => {
    t.deepEqual(spread(1, 2, 3), [1, 2, 3], '(1, 2, 3) to [1, 2, 3]');
    t.deepEqual(spread([], {}), [[], {}], '([], {}) to [[], {}]');
    t.deepEqual(spread(undefined, undefined), [undefined, undefined], 'Got undefineds!');
    t.end();
});
