import ModuleContext from './ModuleContext.js';
import RCE from './RCE.react.jsx';
import React from 'react';
import Registry from './Registry.js';

import './react-component-explorer.scss';

export function module(moduleName, exampleBuilder) {
  var context = new ModuleContext(moduleName);
  Registry.addContext(context);

  exampleBuilder.call(null, context);
}

export function example(exampleTitle, exampleRender, exampleRaw) {
  var activeContext = Registry.getActiveContext();

  if (!activeContext) {
    throw Error(`No _context to register example for ${exampleTitle}`);
  }

  activeContext.addExample(exampleTitle, exampleRender, exampleRaw);
}

export function render() {
  return (
    <RCE registry={Registry} />
  );
}

// TODO export a default function that takes some config and calls render
// we should be able to config rendering into static html, into a react component, or whatever idk
