import test from 'tape';
import { deepEquals } from '../src';

test('Tests - deepEquals.js', t => {
    const arr1 = [1, 2];
    const arr2 = [1, 2];
    const arr3 = [2, 3];
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { c: 1 } } };
    const obj3 = { a: 1 };
    t.equal(deepEquals(arr1, arr2), true, 'arr1 == arr2');
    t.equal(deepEquals(arr1)(arr3), false, 'arr1 != arr3');
    t.equal(deepEquals(obj1, obj2), true, 'obj1 == obj2');
    t.equal(deepEquals(obj1)(obj3), false, 'obj1 != obj3');
    t.end();
});
