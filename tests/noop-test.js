import test from 'tape';
import { noop } from '../src';

test('Tests - noop.js', t => {
    t.equal(noop(), undefined, 'noop returns undefined');
    t.equal(noop(5), undefined, 'noop returns undefined with argument');
    t.end();
});
