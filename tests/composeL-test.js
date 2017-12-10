import test from 'tape';
import { composeL } from '../src';

test('Tests - composeL.js', t => {
    const add = (a, b) => (a + b);
    const addOne = a => (a + 1);
    const addTwo = a => (a + 2);

    t.equal(composeL(add, addOne)(1, 2), 4, '1 + 2 + 1 = 4');
    t.equal(composeL(addTwo, addOne)(2), 5, '2 + 2 + 1 = 4');
    t.equal(composeL(add)(1, 2), 3, '1 + 2 = 3');
    t.equal(composeL(addOne)(1), 2, '1 + 1 = 2');
    t.equal(composeL(add, addTwo, addOne)(1, 2), 6, '1 + 2 + 2 + 1 = 6');
    t.end();
});
