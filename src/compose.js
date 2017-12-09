const compose = (...args) => {
    const [first, ...rest] = args.reverse();

    return (...opts) => rest.reduce(
        (prevFn, nextFn) => nextFn(prevFn),
        first(...opts),
    );
};

export default compose;
