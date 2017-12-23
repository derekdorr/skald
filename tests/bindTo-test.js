import test from 'tape';
import bindTo from '../src/bindTo';

test('Tests - bindTo.js', t => {
    const foo = (a, b, c) => a + b + c;
    const fn1 = bindTo(foo, undefined, undefined, 1);
    const fn2 = bindTo(foo, 3, 2, undefined);
    const fn3 = bindTo(foo, undefined, 2);
    const fn4 = bindTo(foo);

    t.equal(fn1(3, 2), 6, '3 + 2 + 1 = 6');
    t.equal(fn1(3)(3), 7, '3 + 3 + 1 = 7');
    t.equal(fn2(2), 7, '3 + 2 + 2 = 7');
    t.equal(fn3(1, 2), 5, '1 + 2 + 2 = 5');
    t.equal(fn3(1)(1), 4, '1 + 2 + 1 = 4');
    t.equal(fn4(1, 1, 1), 3, '1 + 1 + 1 = 3');
    t.end();
});
