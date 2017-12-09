import test from 'tape';
import isNull from '../src/isNull';

test('Tests - isNull.js', t => {
    t.equal(isNull(null), true, 'null is null');
    t.equal(isNull({}), false, '{} is not null');
    t.equal(isNull(false), false, 'false is not null');
    t.equal(isNull([]), false, '[] is not null');
    t.end();
});
