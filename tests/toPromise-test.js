import test from 'tape';
import { toPromise } from '../src';

test('Test - toPromise.js', t => {
    const foo = new Promise(res => res([]));
    const tests = [
        toPromise(5).then(val => {
            t.equal(val, 5, 'Promise resolves with value 5');
        }),
        toPromise({}).then(val => {
            t.deepEqual(val, {}, 'Promise resolves with value {}');
        }),
        toPromise(foo).then(val => {
            t.deepEqual(val, [], 'foo resolves with value []');
        }),
    ];

    Promise.all(tests).then(() => {
        t.end();
    });
});
