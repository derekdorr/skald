import test from 'tape';
import { getProp } from '../src';

test('Tests - getProp.js', t => {
    const obj = { a: 1, b: 2 };
    t.equal(getProp('a', obj), 1, 'obj.a is 1');
    t.equal(getProp('b')(obj), 2, 'obj.b is 2');
    t.equal(getProp('c', obj), undefined, 'obj.c is undefined');
    t.end();
});
