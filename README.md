# dom-component-parser

[![Latest Version on NPM](https://img.shields.io/npm/v/dom-component-parser.svg?style=flat-square)](https://npmjs.com/package/dom-component-parser)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie/dom-component-parser/master.svg?style=flat-square)](https://travis-ci.org/spatie/dom-component-parser)

Sometimes you want to be able to quickly set up a JavaScript component in your dome with some settings. Libraries like [Vue.js](https://github.com/vuejs/vue) provide a powerful API to create custom components, but is quite heavy for cases like mounting third party libraries to your DOM.

Say we want to mount a hypothetical `Uploader` component:

```html
<div class="js-uploader"></div>
```

```js
new Uploader(document.querySelector('.js-uploader'), {
    url: 'http://example.com',
    multiple: true
});
```

Now what if we'd want to pass the URL through the DOM, since it's a value that gets returned from the server (I'll use a Laravel example below) and we want to make the multiple optional, so we can reuse the component for both single and multiple uploaders.

```html
<div
    class="js-uploader"
    data-url="{{ action('MyController@upload') }}"
    data-multiple
></div>
```

```js
const element = document.querySelector('.js-uploader');
const url = element.getAttribute('data-url');
const multiple = element.getAttribute('data-multiple') === '' ? true : false;

if (!url) throw new Error();

new Uploader(element, { url, multiple });
```

The `dom-component-parser` cleans up the above process by declaring a component name and options object shape.

```js
import component from 'dom-component-parser';

const uploader = component('uploader', {
    url: 'required', // `required` is a special flag, will throw an error if missing
    multiple: false, // Defaults to false
});

new Uploader(uploader.node, uploader.options);
```

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## Install

You can install the package via npm:

```bash
$ npm install dom-component-parser
```

## Usage

```js
import component from 'dom-component-parser';

component('my-uploader', { uploadUrl: '' });

// <div class="js-my-uploader" data-upload-url="http://example.com">
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
