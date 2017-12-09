import test from 'tape';
import excludes from '../src/excludes';

test('Tests - excludes.js', t => {
    t.equal(excludes('g', 'foo'), true, 'foo excludes g');
    t.equal(excludes(3)('hi5'), true, 'hi5 excludes 3');
    t.equal(excludes(4, [1, 2, 3]), true, '[1, 2, 3] excludes 4');
    t.equal(excludes('b')(['b', 'c']), false, '[b, c] does not exclude b');
    t.end();
});
