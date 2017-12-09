import test from 'tape';
import curry from '../src/curry';

test('Tests - curry.js', t => {
    const add = (a, b, c) => a + b + c;
    t.equal(curry(add)(1, 2, 3), 6, '1 + 2 + 3 = 6');
    t.equal(curry(add, 2)(3, 4), 9, '2 + 3 + 4 = 9');
    t.equal(curry(add, 3, 4)(5), 12, '3 + 4 + 5 = 12');
    t.equal(curry(add)(1)(1)(1), 3, '1 + 1 + 1 = 3');
    t.equal(curry(add, 1)(2, 2), 5, '1 + 2 + 2 = 5');
    t.equal(curry(add)(2)(2)(2), 6, '2 + 2 + 2 = 6');
    t.end();
});
