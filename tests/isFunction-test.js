import test from 'tape';
import { isFunction } from '../src';

test('Tests - isFunction.js', t => {
    t.equal(isFunction(RegExp), true, 'regex is function');
    t.equal(isFunction(true), false, 'true is not function');
    t.equal(isFunction(), false, 'undefined is not function');
    t.end();
});
