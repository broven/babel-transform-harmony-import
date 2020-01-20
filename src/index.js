const assert = require('assert');
const template = require('@babel/template').default;

const getallLocalName = spec => spec.map(item => item.local.name);

const emptyFunction = template(`
    function __babel_transform_harmony_import__(){}
`);
const funcCall = template(`
__babel_transform_harmony_import__(CALL_NAME)
`)
const astEmptyFunc = emptyFunction();
let hasFuncInject = false;
module.exports = function MapperPlugin({ types: t }) {
  return {
    pre(state) {},
    post(state) {},
    visitor: {
      Identifier(path) {},
      ImportDeclaration(path, state) {
        assert(
          Array.isArray(
            state.opts.localName,
            '[babel-transform-harmony-import] params localName shloud be a string[]'
          )
        );
        const arr = state.opts.localName;
        const localNames = getallLocalName(path.node.specifiers);
        localNames.forEach(localName => {
          if (arr.indexOf(localName) !== -1) {
            if (!hasFuncInject) {
              hasFuncInject = true;
              path.insertBefore(astEmptyFunc);
            }
            path.insertAfter(funcCall({
                'CALL_NAME': t.identifier(localName)
            }));
          }
        });
      },
      MemberExpression(path, state) {}
    }
  };
};
