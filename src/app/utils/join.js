export const joinByDot = (...args) => {
    return args
        .filter((item) => {
            return typeof item === 'number' || item != '';
        })
        .join('.');
};
