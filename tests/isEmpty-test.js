import test from 'tape';
import { isEmpty } from '../src';

test('Tests - isEmpty.js', t => {
    t.equal(isEmpty(''), true, '"" is empty');
    t.equal(isEmpty([]), true, '[] is empty');
    t.equal(isEmpty({}), true, '{} is empty');
    t.equal(isEmpty(['']), false, '[""] is not empty');
    t.equal(isEmpty(0), false, '0 is not empty');
    t.equal(isEmpty('foo'), false, 'foo is not empty');
    t.equal(isEmpty({ a: 1 }), false, '{ a: 1 } is not empty');
    t.end();
});
