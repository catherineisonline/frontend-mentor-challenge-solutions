#!/usr/bin/env node

var fs = require('fs')
var filePath = __dirname
var currentPath = process.cwd()
var cfg = require('get-git-info')(currentPath)

/**
 * Module dependencies.
 */

var program = require('commander')

program
  .version(require('./package.json').version)
  .option('-i, --init', 'init default .travis.yml')
  .option('-b, --badge', 'get all badges for README.md')
  .option('-n, --npm', 'get npm badge .travis.yml')
  .option('-g, --gitter', 'get gitter badge for README.md')
  .option('-t, --travis', 'get travis badge for README.md')
  .option('-s, --standard', 'get standard badge for README.md')
  .option('-c, --codecov', 'get codecov badge for README.md')
  .parse(process.argv)

if (program.init) {
  fs.createReadStream(filePath + '/travis.yml').pipe(fs.createWriteStream(currentPath + '/.travis.yml'))
  fs.createReadStream(filePath + '/codecov.yml').pipe(fs.createWriteStream(currentPath + '/codecov.yml'))

  if (fs.existsSync(process.cwd() + '/package.json')) {
    var source = require(filePath + '/package.json')
    var dest = require(process.cwd() + '/package.json')

    if (dest.scripts) {
      for (var i in source.scripts) {
        // console.log(source.scripts.test)
        dest.scripts[i] = source.scripts[i]
      }
    } else {
      dest.scripts = {
        'test': './node_modules/.bin/nyc ./node_modules/.bin/ava -v',
        'report-coverage': './node_modules/.bin/nyc report --reporter=lcov > coverage.lcov && codecov',
        'standard': './node_modules/.bin/standard index.js'
      }
    }

    if (dest.devDependencies) {
      for (var j in source.devDependencies) {
        // console.log(i)
        dest.devDependencies[j] = source.devDependencies[j]
      }
    } else {
      dest.devDependencies = {
        'ava': '^0.15.2',
        'co-exec': '^1.0',
        'codecov': '^1.0.1',
        'ghooks': '^1.2.4',
        'nyc': '^7.0.0',
        'standard': '^7.1.2'
      }
    }

    if (dest.config) {
      for (var k in source.config) {
        // console.log(i)
        dest.config[k] = source.config[k]
      }
    } else {
      dest.config = {
        'ghooks': {
          'pre-commit': 'npm run standard'
        }
      }
    }

    fs.writeFileSync(process.cwd() + '/package.json', JSON.stringify(dest, null, 2))
  }

  console.log('init complete!')
}

if (program.badge) {
  console.log('[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/' + cfg.user + '/' + cfg.project + '?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)')
  console.log('[![NPM version](https://img.shields.io/npm/v/' + cfg.project + '.svg?style=flat-square)](https://www.npmjs.com/package/' + cfg.project + ')')
  console.log('[![Build](https://travis-ci.org/' + cfg.user + '/' + cfg.project + '.svg?branch=master)](https://travis-ci.org/' + cfg.user + '/' + cfg.project + ')')
  console.log('[![codecov.io](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '/coverage.svg?branch=master)](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '?branch=master)')
  console.log('[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)')
}

if (program.codecov) {
  console.log('[![codecov.io](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '/coverage.svg?branch=master)](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '?branch=master)')
}

if (program.npm) {
  console.log('[![NPM version](https://img.shields.io/npm/v/' + cfg.project + '.svg?style=flat-square)](https://www.npmjs.com/package/' + cfg.project + ')')
}

if (program.gitter) {
  console.log('[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/' + cfg.user + '/' + cfg.project + '?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)')
}

if (program.travis) {
  console.log('[![Build](https://travis-ci.org/' + cfg.user + '/' + cfg.project + '.svg?branch=master)](https://travis-ci.org/' + cfg.user + '/' + cfg.project + ')')
}

if (program.standard) {
  console.log('[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)')
}

// console.log('Usages: travis -i or travis -b')
