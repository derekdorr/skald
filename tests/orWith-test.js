import test from 'tape';
import { orWith } from '../src';

test('Tests - orWith.js', t => {
    const foo = val => val > 10;
    const bar = val => val < 5;
    t.equal(orWith([foo, bar], 1), true, '1 is true for foo or bar');
    t.equal(orWith([foo, bar])(11), true, '11 is true for foo or bar');
    t.equal(orWith([foo, bar], 7), false, '7 is not true for foo or bar');
    t.equal(orWith([foo, bar])(8), false, '8 is not true for foo or bar');
    t.end();
});
