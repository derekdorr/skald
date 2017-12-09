import test from 'tape';
import toString from '../src/toString';

test('Tests - toString.js', t => {
    t.equal(toString(undefined), '', 'undefined -> ""');
    t.equal(toString(''), '', '"" -> ""');
    t.equal(toString(null), 'null', 'null -> null');
    t.equal(toString([]), '', '[] -> ""');
    t.equal(toString({}), '[object Object]', '{} -> [object Object]');
    t.end();
});
