import test from 'tape';
import callback from '../src/callback';

test('Tests - callback.js', t => {
    t.equal(callback(1, true), 1, 'true returns 1');
    t.equal(callback(2, false), null, 'false returns null');
    t.equal(callback(3)(true), 3, 'true returns 3');
    t.equal(callback(4)(false), null, 'false returns null');
    t.end();
});
