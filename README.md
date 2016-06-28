# dom-component-parser

[![Latest Version on NPM](https://img.shields.io/npm/v/dom-component-parser.svg?style=flat-square)](https://npmjs.com/package/dom-component-parser)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie/dom-component-parser/master.svg?style=flat-square)](https://travis-ci.org/spatie/dom-component-parser)

```js
import component from 'dom-component-parser';

component('my-uploader', { uploadUrl: '' });

// <div class="js-my-uploader" data-upload-url="http://example.com">
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
