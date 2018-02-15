import test from 'tape';
import { args } from '../src';

test('Tests - args.js', t => {
    t.deepEqual(args(1, 2), [1, 2], 'Got [1, 2]');
    t.deepEqual(args(undefined), [undefined], 'Got [undefined]');
    t.deepEqual(args(), [], 'Got []');
    t.end();
});
