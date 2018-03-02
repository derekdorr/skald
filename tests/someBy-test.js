import test from 'tape';
import { someBy } from '../src';

test('Tests - someBy.js', t => {
    const foo = [1, 2, 3];
    t.equal(someBy(a => a, foo), true, 'all elements are truthy');
    t.equal(someBy(a => a > 4)(foo), false, 'all elements less than 4');
    t.end();
});
