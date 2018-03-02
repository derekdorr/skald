import test from 'tape';
import { invoke } from '../src';

test('Tests - invoke.js', t => {
    const foo = () => 1;
    t.deepEqual(invoke(foo), 1, 'foo is invoked and returned 1');
    t.end();
});
