import test from 'tape';
import { executeOn } from '../src';

test('Tests - executeOn.js', t => {
    const foo = a => a + 2;
    t.equal(executeOn(2, foo), 4, '2 returns 4');
    t.equal(executeOn(3)(foo), 5, '3 returns 5');
    t.end();
});
