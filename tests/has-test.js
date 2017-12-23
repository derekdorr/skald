import test from 'tape';
import { has } from '../src';

test('Tests - has.js', t => {
    const foo = {
        a: 1,
    };
    t.equal(has(foo, 'a'), true, 'foo has a');
    t.equal(has(foo, 'b'), false, 'foo does not have b');
    t.equal(has(foo)('a'), true, 'function foo returns true');
    t.equal(has(foo)('b'), false, 'function foo returns false');
    t.end();
});
