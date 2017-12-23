import test from 'tape';
import { attempt } from '../src';

test('Tests - attempt.js', t => {
    t.equal(attempt(() => JSON.parse('<>'), true), true, 'JSON parse failed, true is returned');
    t.deepEqual(attempt(() => JSON.parse('{}'), false), {}, 'JSON parse succeeds, object is returned');
    t.equal(
        attempt(() => JSON.parse('<>'), e => e.message),
        'Unexpected token < in JSON at position 0',
        'JSON parse failed, function is run',
    );
    t.end();
});
