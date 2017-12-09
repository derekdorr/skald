import test from 'tape';
import toBoolean from '../src/toBoolean';

test('Tests - toBoolean.js', t => {
    t.equal(toBoolean(true), true, 'true becomes true');
    t.equal(toBoolean(false), false, 'false becomes false');
    t.equal(toBoolean('false'), false, 'string false becomes false');
    t.equal(toBoolean([]), true, '[] becomes true');
    t.equal(toBoolean(['foo']), true, '[foo] becomes true');
    t.equal(toBoolean(null), false, 'null becomes false');
    t.equal(toBoolean(undefined), false, 'undefined becomes false');
    t.equal(toBoolean(1), true, '1 becomes true');
    t.equal(toBoolean(0), false, '0 becomes false');
    t.end();
});
