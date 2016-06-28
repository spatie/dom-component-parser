export const keys = object => {

    const keys = [];

    for (let key in object) {
        keys.push(key);
    }

    return keys;
};
