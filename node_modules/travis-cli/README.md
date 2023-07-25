# travis-cli

a cli tool for travis-cli 

[![NPM version](https://img.shields.io/npm/v/travis-cli.svg?style=flat-square)](https://www.npmjs.com/package/travis-cli)
[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/i5ting/travis-cli?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build](https://travis-ci.org/i5ting/travis-cli.svg?branch=master)](https://travis-ci.org/i5ting/travis-cli)
[![codecov.io](https://codecov.io/github/i5ting/travis-cli/coverage.svg?branch=master)](https://codecov.io/github/i5ting/travis-cli?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

```
$ [sudo] npm i -g travis-cli 
```

## Usages

```
$ travis -h

  Usage: travis [options]

  Options:

    -h, --help      output usage information
    -V, --version   output the version number
    -i, --init      init default .travis.yml
    -b, --badge     get all badges for README.md
    -n, --npm       get npm badge .travis.yml
    -g, --gitter    get gitter badge for README.md
    -t, --travis    get travis badge for README.md
    -s, --standard  get standard badge for README.md
    -c, --codecov   get codecov badge for README.md
```

create .travis.yml and codecov.yml

```
travis -i
```

get all badges for README.md


```
travis -b
```

- npm [![NPM version](https://img.shields.io/npm/v/travis-cli.svg?style=flat-square)](https://www.npmjs.com/package/travis-cli)
- gitter  [![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/i5ting/travis-cli?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- travis [![Build](https://travis-ci.org/i5ting/travis-cli.svg?branch=master)](https://travis-ci.org/i5ting/travis-cli)
- standard [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
- codecov [![codecov.io](https://codecov.io/github/i5ting/travis-cli/coverage.svg?branch=master)](https://codecov.io/github/i5ting/travis-cli?branch=master)


in package.json you neet scripts with `report-coverage`

```
"scripts": {
    "test": "./node_modules/.bin/nyc ./node_modules/.bin/ava -v",
    "report-coverage": "./node_modules/.bin/nyc report --reporter=lcov > coverage.lcov && codecov"
  },
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本cli

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
