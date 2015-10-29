var recast = require('recast');
var jscodeshift = require('jscodeshift');

var j = jscodeshift;

// TODO: memoize this
function getImportedModule() {
  // TODO: `importedModuleName` should be found in the tree
  var importedModuleName = 'react-component-explorer';

  return {
    Identifier: {
      name: 'example', // we did `import {example} from 'react-component-explorer';
    },
    MemberExpression: {
      object: {
        name: importedModuleName, // we did `import $x from 'react-component-explorer';
      },
      property: {
        name: 'example',
      },
    },
  };
}

function calleeIsImportedModule(callee) {
  var importedModuleMap = getImportedModule();

  var importType = importedModuleMap[callee.type];
  if (!importType) {
    return false;
  }

  switch(callee.type) {
    case 'Identifier':
      return callee.name === importType.name;
    case 'MemberExpression':
      return callee.object.name === importType.object.name &&
        callee.property.name === importType.property.name;
    default:
      return false;
  }
}

function calleeIsLocalContext(callee) {
  // TODO: need to look up at the module() call and get the context variable passed in
  var localModuleContextParamName = 'context';

  switch(callee.type) {
    // case: 'Identifier':
    //   return false;
    case 'MemberExpression':
      return callee.object.name === localModuleContextParamName &&
        callee.property.name === 'example';
    default:
      return false;
  }
}

function moduleWithPrettyExamples(source) {
  return j(source)
    .find(j.ExpressionStatement)
    .filter(function(path) {
      var expression = path.value.expression;
      var callee = expression.callee;

      return (
        calleeIsImportedModule(callee) ||
        calleeIsLocalContext(callee)
      );
    })
    .forEach(function(path) {
      var expression = path.value.expression;
      var secondParam = expression.arguments[1];
      var funcString = j.literal(recast.print(secondParam, {}).code);
      expression.arguments.push(funcString);
    })
    .toSource({quote: 'single'});
}

module.exports = function(source, map) {
  if (this.cacheable) {
    this.cacheable();
  }

  var newCode = moduleWithPrettyExamples(source);

  console.log("\nNew Code:\n" + newCode);

  this.callback(null, newCode, map);
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {

};
