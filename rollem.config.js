const glob = require('glob');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');

const toConfig = data => {
    const entry = data;
    const dest = entry.replace('src/', 'browser/');
    const moduleName = entry.indexOf('index.js') === -1 ?
        entry.replace('src/', '').replace('.js', '') :
        'skald';
    
    return {
        entry,
        dest,
        format: 'iife',
        moduleName,
        plugins: [
            babel({ 
                plugins: ['external-helpers'],
                externalHelpers: false,
            }),
            resolve({ main: false, modules: true }),
        ],
    };
}

module.exports = glob.sync('src/*.js').map(toConfig);
