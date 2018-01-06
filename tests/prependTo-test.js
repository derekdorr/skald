import test from 'tape';
import { prependTo } from '../src';

test('Tests - prependTo.js', t => {
    t.equal(prependTo('foo', 'bar'), 'barfoo', 'Got barfoo');
    t.equal(prependTo('bar')('baz'), 'bazbar', 'Got bazbar');
    t.end();
});
