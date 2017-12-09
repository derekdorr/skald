import test from 'tape';
import isNumber from '../src/isNumber';

test('Tests - isNumber.js', t => {
    t.equal(isNumber(0), true, '0 is number');
    t.equal(isNumber(NaN), true, 'NaN is number');
    t.equal(isNumber(Infinity), true, 'Infinity is number');
    t.equal(isNumber(false), false, 'false is not number');
    t.equal(isNumber({}), false, '{} is not number');
    t.equal(isNumber('foo'), false, 'foo is not number');
    t.end();
});
