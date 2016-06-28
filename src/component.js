import { keys } from './helpers';

export const component = (tag, defaultOptions = {}) => {

    const options = component => {

        const parseOption = option => {

            if (!component.hasAttribute(`data-${option}`)) {

                if (defaultOptions[option] === 'required') {
                    throw new Error(`Option ${option} is required on component ${component}`);
                }

                return defaultOptions[option];
            }

            const value = component.getAttribute(`data-${option}`);

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

    return [...document.getElementsByClassName(`js-${tag}`)].map(component => ({
        node: component,
        options: options(component),
    }));
};

export default component;
