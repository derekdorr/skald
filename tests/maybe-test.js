import test from 'tape';
import { maybe } from '../src';

test('Tests - maybe.js', t => {
    const foo = val => val + 1;
    t.equal(maybe(foo)(null), null, 'null returns null');
    t.equal(maybe(foo, undefined), undefined, 'undefined returns undefined');
    t.equal(maybe(foo, 1), 2, '1 returns 2');
    t.equal(maybe(foo)(2), 3, '2 returns 3');
    t.end();
});
