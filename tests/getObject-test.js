import test from 'tape';
import { getObject } from '../src';

test('Tests - getObject.js', t => {
    t.deepEqual(getObject('a', 1), { a: 1 }, '{a:1}');
    t.deepEqual(getObject('b')(2), { b: 2 }, '{b:2}');
    t.end();
});
