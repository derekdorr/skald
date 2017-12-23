/**
 * Take a value and if not a promise, make it a promise
 *
 * @module toPromise
 * @func
 * @since 1.1.0
 * @param {*} val
 * @return {Promise}
 * @example
 *
 *     const foo = toPromise(5);
 *     foo.then(console.log); //=> 5;
 */

import identity from './identity';
import isPromise from './isPromise';
import ternaryWith from './ternaryWith';

const genPromise = val => new Promise(res => res(val));
const toPromise = ternaryWith(genPromise, identity, isPromise);

export default toPromise;
