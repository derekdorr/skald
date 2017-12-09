import test from 'tape';
import toObject from '../src/toObject';

test('Tests - toObject.js', t => {
    t.deepEqual(toObject(null), null, 'null becomes null');
    t.deepEqual(toObject({}), {}, '{} becomes {}');
    t.deepEqual(toObject({ a: 1 }), { a: 1 }, '{a:1} becomes {a:1}');
    t.deepEqual(toObject(undefined), {}, 'undefined becomes {}');
    t.deepEqual(toObject(false), {}, 'false becomes {}');
    t.deepEqual(toObject('foo'), {}, 'foo becomes {}');
    t.deepEqual(toObject({ a: 1 }, { b: 2 }), { a: 1, b: 2 }, 'two objects merge');
    t.end();
});
