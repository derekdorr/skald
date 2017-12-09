import test from 'tape';
import add from '../src/add';

test('Tests - add.js', t => {
    t.equal(add(1, 2), 3, '1 + 2 = 3');
    t.equal(add(2)(3), 5, '2 + 3 = 5');
    t.equal(add()(3)(4), 7, '3 + 4 = 7');
    t.end();
});
