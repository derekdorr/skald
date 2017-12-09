import test from 'tape';
import check from '../src/check';

test('Tests - check.js', t => {
    const foo = {
        a: {
            b: {
                c: 1,
            },
            d: 2,
        },
        e: 3,
    };
    t.equal(check(foo, ['a', 'b', 'c']), 1, 'foo.a.b.c is 1');
    t.equal(check(foo)(['e']), 3, 'foo.e is 3');
    t.equal(check(foo, ['a', 'b', 'f']), undefined, 'foo.a.b.f is undefined');
    t.equal(check(foo)(['a', 'f']), undefined, 'foo.a.f is undefined');
    t.end();
});
