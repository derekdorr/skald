import test from 'tape';
import notEquals from '../src/notEquals';

test('Tests - notEquals.js', t => {
    t.equals(notEquals(1, 2), true, '1 !== 2');
    t.equals(notEquals(1, 1), false, '1 === 1');
    t.equals(notEquals('1')(1), true, 'str 1 !== 1');
    t.end();
});
