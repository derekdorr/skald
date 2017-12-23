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
import has from './has';
import ternaryWith from './ternaryWith';
import toString from './toString';

const defaultTemplate = (...args) => toString(args);

const memoize = (fn, template) => {
    const tmpl = _or(template, defaultTemplate);
    const cache = {};
    const fromCache = val => cache[val];

    return (...args) => {
        const key = tmpl(args);
        const cacheHas = has(cache);
        const call = val => {
            cache[val] = fn(...args);
            return cache[val];
        };
        return ternaryWith(call, fromCache, cacheHas, key);
    };
};

export default memoize;
