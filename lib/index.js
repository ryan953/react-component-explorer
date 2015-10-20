import React from 'react';

import './react-component-explorer.scss';

import ModuleView from './ModuleView.jsx';

var moduleRegistry = [];
var modContext;

export function module(modName, exampleBuilder) {
  console.log('creating module', modName, exampleBuilder);
  var mod = new ModuleView(modName);

  moduleRegistry = moduleRegistry.concat([mod]);

  modContext = mod;
  exampleBuilder();
  modContext = null;
}

export function example(exampleTitle, exampleRender) {
  if (!modContext) {
    throw Error(`No modContext to register example for ${exampleTitle}`);
  }
  console.log('adding example', exampleTitle, 'to', modContext.name, exampleRender);

  modContext.addExample(exampleTitle, exampleRender);
}

// TODO export a default function that takes some config and calls render
// we should be able to config rendering into static html, into a react component, or whatever idk
export function render() {
  return (
    <div style={{padding: '10'}}>
      <h1>All Module Examples</h1>
      <div style={{float: 'left', width: '20%'}}>
        <ul>
          {moduleRegistry.map((mod, index) =>
            <li key={'modList' + index}>
              <a href="#">{mod.name}</a>
            </li>
          )}
        </ul>
      </div>
      <div style={{float: 'right', width: '80%'}}>
        {moduleRegistry.map((mod) => mod.render())}
      </div>
    </div>
  );
}
