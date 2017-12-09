const define = fn => {
    const internal = (...args) => (args.length < fn.length ?
        (...ops) => internal(...args.concat(ops)) :
        fn(...args));

    return internal;
};

export default define;
