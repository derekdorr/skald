import test from 'tape';
import { isBoolean } from '../src';

test('Tests - isBoolean.js', t => {
    t.equal(isBoolean(true), true, 'true is boolean');
    t.equal(isBoolean(false), true, 'false is boolean');
    t.equal(isBoolean(''), false, 'false is not boolean');
    t.equal(isBoolean(null), false, 'null is not boolean');
    t.equal(isBoolean(), false, 'undefined is not boolean');
    t.end();
});
