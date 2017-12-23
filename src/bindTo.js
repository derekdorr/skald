/**
 * Takes a function and arguments. Leaves undefined arguments unbound and
 * binds defined arguments to their position in arguments list.
 * 
 * @module bindTo
 * @func
 * @since 1.8.0
 * @param {function} fn
 * @param {...*} args
 * @return {function}
 * @example
 * 
 *     const foo = (a, b, c) = a + b + c;
 *     bindTo(foo, 1, 2)(3); //=> 6
 *     bindTo(foo, undefined, 1, 2)(1); //=> 4
 *     bindTo(foo, undefined, undefined, 3)(1, 2); //=> 6
 *     bindTo(foo, undefined, 1)(1)(1); //=> 3
 */

import { BOOL_TRUE } from 'permanent';
import _or from './_internal/_or';
import define from './define';
import isUndefined from './isUndefined';
import subtract from './subtract';
import ternary from './ternary';

const bindTo = (fn, ...args) => {
    const length = _or(fn.length, args.length);
    const def = args.filter(val => !isUndefined(val));
    const defLength = def.length;
    const iterator = Array(length).fill(BOOL_TRUE);
    const diff = subtract(length,defLength);
    const internal = (...ops) => {
        const fin = iterator.map((v, index) => {
            const argAtIndex = args[index];
            return ternary(
                argAtIndex,
                () => ops.pop(),
                isUndefined(argAtIndex),  
            );
        });
        
        return fn(...fin);
    };
    
    return define(internal, diff);
};

export default bindTo;
