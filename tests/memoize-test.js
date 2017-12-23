import test from 'tape';
import sinon from 'sinon';
import { memoize } from '../src';

test('Tests - memoize.js', t => {
    const fn = sinon.spy();
    const memoized = memoize(fn);
    t.equal(fn.callCount, 0, 'fn not called');
    memoized(1, 2, 3);
    t.equal(fn.callCount, 1, 'fn called once');
    memoized(1, 2, 3);
    t.equal(fn.callCount, 1, 'fn still called once');
    memoized(1, 2);
    t.equal(fn.callCount, 2, 'fn called twice');
    memoized(1, 2);
    t.equal(fn.callCount, 2, 'fn still called twice');
    t.end();
});
