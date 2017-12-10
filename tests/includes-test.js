import test from 'tape';
import { includes } from '../src';

test('Tests - includes.js', t => {
    t.equal(includes('f', 'foo'), true, 'foo includes f');
    t.equal(includes(5)('hi5'), true, 'hi5 contains 5');
    t.equal(includes(1, [1, 2, 3]), true, '[1, 2, 3] contains 1');
    t.equal(includes('a')(['b', 'c']), false, '[b, c] does not contain a');
    t.end();
});
