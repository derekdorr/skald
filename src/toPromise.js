/**
 * Take a value and if not a promise, make it a promise
 *
 * @module toPromise;
 * @func
 * @since 1.1.0
 * @param {*} val
 * @return {Promise}
 * @example
 *
 *     const foo = toPromise(5);
 *     foo.then(console.log); //=> 5;
 */

import ternary from './ternary';
import isPromise from './isPromise';

const toPromise = val => ternary(
    () => new Promise(res => res(val)),
    val,
    isPromise(val),
);

export default toPromise;
