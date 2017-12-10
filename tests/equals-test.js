import test from 'tape';
import { equals } from '../src';

test('Tests - equals.js', t => {
    t.equals(equals(1, 1), true, '1 equals 1');
    t.equals(equals(1, 0), false, '1 does not equal 0');
    t.equals(equals(1)(1), true, '1 function is 1');
    t.equals(equals(1)(0), false, '1 function does not equal 1');
    t.end();
});
