import test from 'tape';
import { typeOf } from '../src';

test('Tests - typeOf.js', t => {
    t.equal(typeOf({}), 'object', '{} is object');
    t.equal(typeOf(null), 'object', 'null is object');
    t.equal(typeOf([]), 'object', '[] is object');
    t.equal(typeOf(), 'undefined', '() is undefined');
    t.equal(typeOf(true), 'boolean', 'true is boolean');
    t.equal(typeOf(RegExp), 'function', 'RegExp is function');
    t.equal(typeOf(1), 'number', '1 is number');
    t.equal(typeOf('foo'), 'string', 'foo is string');
    t.end();
});
