import test from 'tape';
import { filterBy } from '../src';

test('Tests - filterBy.js', t => {
    const foo = val => val > 3;
    const filterByFoo = filterBy(foo);
    t.deepEqual(filterByFoo([1, 2, 4, 5]), [4, 5], 'filterByFoo is correct');
    t.deepEqual(filterBy(foo, [2, 3, 4]), [4], 'filter can return value directly');
    t.end();
});
