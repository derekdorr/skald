import test from 'tape';
import { or } from '../src';

test('Tests - or.js', t => {
    t.equal(or(false, false, false), false, 'all false is false');
    t.equal(or(true, false, false), true, 'one true is true');
    t.equal(or(true, true, true), true, 'all true is true');
    t.equal(or([false, false]), false, 'array of false is false');
    t.equal(or([true, false]), true, 'array with true is true');
    t.end();
});
