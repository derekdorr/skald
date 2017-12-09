import test from 'tape';
import and from '../src/and';

test('Tests - and.js', t => {
    t.equal(and(true, true, true), true, 'trues are true');
    t.equal(and(true, true, false), false, 'one false is false');
    t.equal(and(false, false, false), false, 'all false is false');
    t.equal(and([true, true]), true, 'array of true is true');
    t.equal(and([true, false]), false, 'array with false is false');
    t.end();
});
