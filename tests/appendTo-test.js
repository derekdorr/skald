import test from 'tape';
import { appendTo } from '../src';

test('Tests - appendTo.js', t => {
    t.equal(appendTo('foo', 'bar'), 'foobar', 'Got foobar');
    t.equal(appendTo('bar')('baz'), 'barbaz', 'Got barbaz');
    t.end();
});
