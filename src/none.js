/**
 * Returns true if no argument or array value is true
 *
 * @module none
 * @func
 * @since 1.4.0
 * @param {...*} args
 * @return {boolean}
 */

import compose from './compose';
import not from './not';
import or from './or';

const none = compose(not, or);

export default none;
