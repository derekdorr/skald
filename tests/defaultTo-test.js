import test from 'tape';
import { defaultTo } from '../src';

test('Tests - defaultTo', t => {
    t.equal(defaultTo(5, undefined), 5, 'Defaults to 5');
    t.equal(defaultTo(3)(4), 4, 'Remains at 4');
    t.equal(defaultTo(null)(false), null, 'Defaults to null');
    t.end();
});
