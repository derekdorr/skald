import test from 'tape';
import { identity } from '../src';

test('Tests - identiy.js', t => {
    t.equal(identity(5), 5, '5 returns 5');
    t.equal(identity(null), null, 'null returns null');
    t.deepEqual(identity({}), {}, '{} returns {}');
    t.end();
});
