import test from 'tape';
import { not } from '../src';

test('Tests - not.js', t => {
    t.equals(not(false), true, 'false -> true');
    t.equals(not(1), false, '1 -> false');
    t.ok(typeof not(a => a) === 'function', 'negate function');
    t.equals(not(a => a)(true), false, 'negate function returns false');
    t.end();
});
