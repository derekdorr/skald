import test from 'tape';
import isPromise from '../src/isPromise';

test('Tests - isPromise.js', t => {
    t.equal(isPromise(Promise.resolve()), true, 'Promise.resolve is promise');
    t.equal(isPromise(new Promise(res => res(false))), true, 'new Promise is promise');
    t.equal(isPromise(true), false, 'true is not promise');
    t.equal(isPromise(() => {}), false, 'function is not promise');
    t.equal(isPromise([]), false, 'Array is not promise');
    t.end();
});
