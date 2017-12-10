import test from 'tape';
import { subtract } from '../src';

test('Tests - subtract.js', t => {
    t.equal(subtract(10, 1), 9, '10 - 1 = 9');
    t.equal(subtract(10)(2), 8, '10 - 2 = 8');
    t.equal(subtract()(10)(3), 7, '10 - 3 = 7');
    t.end();
});
