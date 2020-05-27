# dom-component-parser

[![Latest Version on NPM](https://img.shields.io/npm/v/dom-component-parser.svg?style=flat-square)](https://npmjs.com/package/dom-component-parser)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie/dom-component-parser/master.svg?style=flat-square)](https://travis-ci.org/spatie/dom-component-parser)

Sometimes you want to be able to quickly set up a JavaScript component in your DOM with some settings. Libraries like [Vue.js](https://github.com/vuejs/vue) provide a powerful API to create custom components, but is quite heavy for cases like mounting third party libraries to your DOM.

Say we want to mount a hypothetical `Uploader` component on all `.js-uploader` nodes:

```html
<div
    class="js-uploader"
    data-url="http://my-site.com/upload1"
    data-multiple
></div>
<div
    class="js-uploader"
    data-url="http://my-site.com/upload2"
></div>
```

Now let's retrieve the DOM element and read out the options in JavaScript:

```js
for (let element of document.querySelectorAll('.js-uploader')) {
    const url = element.getAttribute('data-url');
    const multiple = element.getAttribute('data-multiple') === '' ? true : false;

    if (!url) throw new Error();

    new Uploader(element, { url, multiple });
}
```

The `dom-component-parser` cleans up the above process by declaring a component name and options object shape.

```js
import component from 'dom-component-parser';

component('uploader', {
    url: 'required', // `required` is a special flag, will throw an error if missing
    multiple: false, // Defaults to false
}).forEach(({ element, options }) => new Uploader(element, options));
```

## Support us

Learn how to create a package like this one, by watching our premium video course:

[![Laravel Package training](https://spatie.be/github/package-training.jpg)](https://laravelpackage.training)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Postcardware

You're free to use this package (it's [MIT-licensed](LICENSE.md)), but if it makes it to your production environment you are required to send us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Samberstraat 69D, 2060 Antwerp, Belgium.

The best postcards will get published on the open source page on our website.

## Install

You can install the package via npm:

```bash
$ npm install dom-component-parser
```

## Usage

### Retrieving Components

The `component` method always returns an array of results. Components are queried for a class with their names prefixed by `js-`, e.g. a component named `my-uploader` expects an element with a `js-my-uploader` class.

```html
<div class="js-my-uploader" data-upload-url="http://example.com"></div>
```

```js
import component from 'dom-component-parser';

const myUploaders = component('my-uploader');
// => [ { element: <Element>, options: {} } ]
```

### Declaring Component options

Component options are declared as objects, and map to the component's `data` attributes. The attribute's corresponding value provided in the script will be used as the default value if it's omitted from the DOM element. Camel-cased object keys will look for a snake-cased data attributes.

```html
<div class="js-my-uploader"></div>
<div class="js-my-uploader" data-upload-url="http://my-site.com/upload"></div>
```

```js
const myUploaders = component('my-uploader', { uploadUrl: 'http://example.com' });
// [ { element: <Element>, options: { uploadUrl: 'http://example.com' } },
//   { element: <Element>, options: { uploadUrl: 'http://my-site.com/upload' } } ]
```

There's also a special `required` keyword, which will throw an error if the `data` attribute is missing.

```html
<div class="js-my-uploader"></div>
```

```js
const myUploaders = component('my-uploader', { uploadUrl: 'required' });
// Error: Option `required` is missing on component `my-uploader`
```

Attributes without values will be casted to `true`.

```html
<div class="js-my-uploader"></div>
<div class="js-my-uploader" data-multiple></div>
```

```js
const myUploaders = component('my-uploader', { multiple: false });
// [ { element: <Element>, options: { multiple: false } },
//   { element: <Element>, options: { multiple: true } } ]
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please contact [Sebastian De Deyne](https://github.com/sebastiandedeyne) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie
Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
