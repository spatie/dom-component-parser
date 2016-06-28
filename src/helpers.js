export const keys = object => {

    const keys = [];

    for (let key in object) {
        keys.push(key);
    }

    return keys;
};

export const toSnakeCase = string => string.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
