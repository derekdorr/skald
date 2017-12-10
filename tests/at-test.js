import test from 'tape';
import { at } from '../src';

test('Tests - at.js', t => {
    t.equal(at(2, 'bar'), 'r', 'bar[2] === r');
    t.equal(at(1)('bar'), 'a', 'bar[1] === a');
    t.equal(at(0, [1, 2, 3]), 1, '[1, 2, 3][0] === 1');
    t.equal(at(1)([1, 2, 3]), 2, '[1, 2, 3][1] === 2');
    t.equal(at(2)(5), '', 'Number does not contain');
    t.equal(at(null)('bar'), '', 'Non-number returns empty string');
    t.end();
});
