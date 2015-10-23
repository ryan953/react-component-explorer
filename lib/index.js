import React from 'react';

import './react-component-explorer.scss';

import ModuleContext from './ModuleContext.js';
import ModuleView from './ModuleView.react.jsx';

var _registry = [];
var _context = null;

export function module(modName, exampleBuilder) {
  _context = new ModuleContext(modName, exampleBuilder);
  _context.buildExamples();

  _registry = _registry.concat([_context]);
}

export function example(exampleTitle, exampleRender) {
  if (!_context) {
    throw Error(`No _context to register example for ${exampleTitle}`);
  }

  _context.addExample(exampleTitle, exampleRender);
}

// TODO export a default function that takes some config and calls render
// we should be able to config rendering into static html, into a react component, or whatever idk
export function render() {
  console.log('rendering', _registry);
  return (
    <div style={{padding: '10'}}>
      <h1>All Module Examples</h1>
      <div style={{float: 'left', width: '20%'}}>
        <ul>
          {_registry.map((moduleContext, index) =>
            <li key={'modList' + index}>
              <a href="#">{moduleContext.moduleName}</a>
            </li>
          )}
        </ul>
      </div>
      <div style={{float: 'right', width: '80%'}}>
        {_registry.map((moduleContext) => <ModuleView moduleContext={moduleContext} />)}
      </div>
    </div>
  );
}
