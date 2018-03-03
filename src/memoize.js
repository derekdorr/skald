/**
 * Cache return contents of functions
 *
 * @module memoize
 * @func
 * @since 1.9.0
 * @param {function} fn - Function to templatize
 * @param [function] template - Function to determine cache key
 * @return {function}
 */

import _or from './_internal/_or';
import INT_TWO from './_constants/INT_TWO';
import call from './call';
import compose from './compose';
import define from './define';
import getProp from './getProp';
import has from './has';
import reverse from './reverse';
import spread from './spread';
import ternaryWith from './ternaryWith';
import toString from './toString';

const callToString = call(toString);
const defaultTemplate = compose(callToString, spread);
const getPropR = reverse(getProp, INT_TWO);

const memoize = (fn, template) => {
    const tmpl = _or(template, defaultTemplate);
    const cache = {};
    const fromCache = getPropR(cache);
    const cacheHas = has(cache);
    const callFn = call(fn);
    const caller = define((args, val) => {
        cache[val] = callFn(args);
        return cache[val];
    });
    const internal = args => ternaryWith(caller(args), fromCache, cacheHas, tmpl(args));
    return compose(internal, spread);
};

export default memoize;
