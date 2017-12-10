import test from 'tape';
import { toNumber } from '../src';

test('Tests - toNumber.js', t => {
    t.equal(toNumber('Infinity'), Infinity, 'Infinity becomes infinity');
    t.ok(Number.isNaN(toNumber('NaN')), 'NaN becomes NaN');
    t.equal(toNumber(1), 1, '1 becomes 1');
    t.equal(toNumber('55'), 55, '55 becomes 55');
    t.equal(toNumber('1.23'), 1.23, '1.23 becomes 1.23');
    t.ok(Number.isNaN(toNumber(null)), 'null becomes NaN');
    t.ok(Number.isNaN(toNumber({})), '{} becomes NaN');
    t.end();
});
