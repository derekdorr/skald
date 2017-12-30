/**
 *
 * Compose functions from right to left
 *
 * @module composeL
 * @func
 * @since 1.0.0
 * @param {...function} args
 * @returns {function}
 * @example
 *
 *     compose(val => val + 1, val => val + 2); //=> val => val + 3
 */

import compose from './compose';
import reverse from './reverse';

const composeL = reverse(compose);

export default composeL;
