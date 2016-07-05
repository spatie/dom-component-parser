import { keys, toSnakeCase } from './helpers';

export const component = (tag, defaultOptions = {}) => {

    const options = element => {

        const parseOption = option => {

            if (!element.hasAttribute(`data-${toSnakeCase(option)}`)) {

                if (defaultOptions[option] === 'required') {
                    throw new Error(`Option \`${option}\` is required on component \`${tag}\``);
                }

                return defaultOptions[option];
            }

            const value = element.getAttribute(`data-${toSnakeCase(option)}`);

            if (value === '') {
                return true;
            }

            return value;
        };

        return keys(defaultOptions).reduce((options, option) => {
            options[option] = parseOption(option);
            return options;
        }, {});
    };

    return [...document.getElementsByClassName(`js-${tag}`)].map(element => ({
        element,
        options: options(element),
    }));
};

export default component;
