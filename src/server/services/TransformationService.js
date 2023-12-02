export function transform(obj) {
    switch (typeof obj) {
        case 'number':
            return obj + 1;
        case 'string':
            return `${obj} AE`;
        case 'object':
            if (Array.isArray(obj)) {
                return obj.map(item => transform(item));
            } else {
                return Object.keys(obj).reduce((acc, key) => {
                    acc[key] = transform(obj[key]);
                    return acc;
                }, {});
            }
        default:
            return obj;
    }
}