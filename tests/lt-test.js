import test from 'tape';
import lt from '../src/lt';

test('Tests - lt.js', t => {
    t.equal(lt(1, 2), true, '1 is less than 2');
    t.equal(lt(2)(3), true, '2 is less than 3');
    t.equal(lt(2, 1), false, '2 is not less than 1');
    t.equal(lt(3)(2), false, '3 is not less than 2');
    t.end();
});
