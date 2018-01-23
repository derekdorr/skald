import test from 'tape';
import { replaceWith } from '../src';

test('Tests - replaceWith.js', t => {
    t.equal(replaceWith('f', 'b', 'foo'), 'boo', 'got boo');
    t.equal(replaceWith(/o/g, 'a')('foo'), 'faa', 'got faa');
    t.equal(replaceWith(/o/)('b')('foo'), 'fbo', 'got fbo');
    t.end();
});
