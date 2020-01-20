const babel = require('@babel/core');
const plugin = require('../index');


const opt = {
    babelrc: false,
    plugins: [
      [plugin, {
          localName: ['testModule', 'testModule1', 'importModule2', 'Nerv']
      }]
    ]
  };


  var example = `
import {testModule} from 'origin';
import testModule1 from 'origin';
import * as importModule2 from 'origin';
import Nerv from 'nervjs';
import dsa from 'dsa';
`;

it('simple Usage', () => {
    const {code} = babel.transformSync(example, opt);
    expect(code).toMatchSnapshot();
  });