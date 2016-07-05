import { assert } from 'chai';
import component from '../src/component';
import jsdom from 'mocha-jsdom';

describe('component', () => {

    jsdom();

    it('registers a component without options', () => {

        document.body.innerHTML = `
            <div class="js-my-component"></div>
        `;

        const myComponents = component('my-component');

        assert.lengthOf(myComponents, 1);
        assert.equal(document.querySelectorAll('.js-my-component')[0], myComponents[0].element);

    });

    it('registers multiple components without options', () => {

        document.body.innerHTML = `
            <div class="js-my-component"></div>
            <div class="js-my-component"></div>
        `;

        const myComponents = component('my-component');

        assert.lengthOf(myComponents, 2);
        assert.equal(document.querySelectorAll('.js-my-component')[0], myComponents[0].element);
        assert.equal(document.querySelectorAll('.js-my-component')[1], myComponents[1].element);

    });

    it('reads a component\'s options', () => {

        document.body.innerHTML = `
            <div class="js-my-component" data-foo="bar" data-baz="qux"></div>
        `;

        const [ myComponent ] = component('my-component', { foo: '', baz: '' });

        assert.propertyVal(myComponent.options, 'foo', 'bar');
        assert.propertyVal(myComponent.options, 'baz', 'qux');

    });

    it('replaces missing options with their default options', () => {

        document.body.innerHTML = `
            <div class="js-my-component"></div>
        `;

        const [ myComponent ] = component('my-component', { foo: 'bar' });

        assert.propertyVal(myComponent.options, 'foo', 'bar');

    });

    it('throws an error if a component is missing a required option', () => {

        document.body.innerHTML = `
            <div class="js-my-component"></div>
        `;

        assert.throws(() => component('my-component', { foo: 'required' }));

    });

    it('casts attributes without values to a boolean', () => {

        document.body.innerHTML = `
            <div class="js-my-component" data-foo></div>
        `;

        const [ myComponent ] = component('my-component', { foo: false });

        assert.propertyVal(myComponent.options, 'foo', true);

    });

    it('converts camels to snakes', () => {

        document.body.innerHTML = `
            <div class="js-my-component" data-foo-bar="baz"></div>
        `;

        const [ myComponent ] = component('my-component', { fooBar: '' });

        assert.propertyVal(myComponent.options, 'fooBar', 'baz');

    });

});
