import test from 'tape';
import { executeWith } from '../src';

test('Tests - executeWith.js', t => {
    const add1 = a => a + 1;
    const add2 = a => a + 2;
    const foo = (a, b, c) => a + b + c;
    t.equal(executeWith(foo, add1, add2)(0, 0, 0), 3, '0, 0, 0 => 3');
    t.equal(executeWith(foo, add1, add2, add1)(1, 1, 1), 7, '1, 1, 1 => 7');
    t.end();
});
