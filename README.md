# babel-transform-harmony-import
transform harmony import to none harmony import

sometime bundler will remove your unused import, but not we expected, this plugin aim to make import not removed by bundler

## usage
```jsonc
    ['babel-transform-harmony-import', {
          localName: ['createElement']
      }]]
    
```