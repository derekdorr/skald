import test from 'tape';
import compose from '../src/compose';

test('Tests - compose.js', t => {
    const add = (a, b) => (a + b);
    const addOne = a => (a + 1);
    const addTwo = a => (a + 2);

    t.equal(compose(addOne, add)(1, 2), 4, '1 + 2 + 1 = 4');
    t.equal(compose(addOne, addTwo)(1), 4, '1 + 1 + 2 = 4');
    t.equal(compose(add)(1, 2), 3, '1 + 2 = 3');
    t.equal(compose(addOne)(1), 2, '1 + 1 = 2');
    t.equal(compose(addOne, addTwo, add)(1, 2), 6, '1 + 2 + 1 + 2 = 6');
    t.end();
});
