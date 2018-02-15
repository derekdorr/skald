import test from 'tape';
import { cast } from '../src';

test('Tests - cast.js', t => {
    const foo = cast(6);
    const bar = cast(val => val);
    t.equal(foo(), 6, 'foo executes and returns 6');
    t.equal(bar()(3), 3, 'bar executes and returns identity');
    t.end();
});
