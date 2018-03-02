import test from 'tape';
import { callbackWith } from '../src';

test('Tests - callbackWith.js', t => {
    const foo = a => a;
    const bar = a => a + 1;
    t.equal(callbackWith(bar, foo, 1), 2, '1 returns 2');
    t.equal(callbackWith(bar, foo)(0), null, '0 returns null');
    t.equal(callbackWith(bar)(foo)(2), 3, '2 returns 3');
    t.end();
});
