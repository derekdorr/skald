import test from 'tape';
import { none } from '../src';

test('Tests - none.js', t => {
    t.equal(none(false, false), true, 'all args are falsy');
    t.equal(none([false, false]), true, 'all vals are falsy');
    t.equal(none(true, false), false, 'some arg is truthy');
    t.equal(none([false, true]), false, 'some val is truthy');
    t.end();
});
