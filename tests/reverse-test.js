import test from 'tape';
import reverse from '../src/reverse';

test('Tests - reverse.js', t => {
    const foo = (a, b, c) => (a + b) - c;
    const bar = reverse(foo);
    t.equals(foo(1, 2, 3), 0, '1 + 2 - 3 = 0');
    t.equals(bar(1, 2, 3), 4, '3 + 2 - 1 = 4');
    t.equals(bar(2)(3)(4), 5, '4 + 3 - 2 = 5');
    t.equals(bar(3, 4)(5), 6, '5 + 4 - 3 = 6');
    t.equals(bar(4)(5, 6), 7, '6 + 5 - 4 = 7');
    t.end();
});
