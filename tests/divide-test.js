import test from 'tape';
import divide from '../src/divide';

test('Tests - divide.js', t => {
    t.equal(divide(100, 2), 50, '100 / 2 = 50');
    t.equal(divide(100)(4), 25, '100 / 4 = 25');
    t.equal(divide()(100)(5), 20, '100 / 5 = 20');
    t.end();
});
