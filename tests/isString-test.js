import test from 'tape';
import isString from '../src/isString';

test('Tests - isString.js', t => {
    t.equal(isString('foo'), true, 'foo is string');
    t.equal(isString({}), false, '{} is not string');
    t.equal(isString(undefined), false, 'undefined is not string');
    t.equal(isString(true), false, 'true is not string');
    t.end();
});
