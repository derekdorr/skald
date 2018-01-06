import test from 'tape';
import { joinBy } from '../src';

test('Tests - joinBy.js', t => {
    t.equal(joinBy('.', [1, 2, 3]), '1.2.3', 'Got 1.2.3');
    t.equal(joinBy(',')(['a', 'b']), 'a,b', 'Got a,b');
    t.end();
});
