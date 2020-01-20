# babel-plugin-transform-harmony-import

transform harmony import to none harmony import

[![Build Status](https://travis-ci.org/broven/babel-transform-harmony-import.svg?branch=master)](https://travis-ci.org/broven/babel-transform-harmony-import)

sometime bundler will remove your unused import, but not we expected, this plugin aim to make import not removed by bundler

## usage
```jsonc
    ['babel-plugin-transform-harmony-import', {
          localName: ['createElement']
      }]]
    
```