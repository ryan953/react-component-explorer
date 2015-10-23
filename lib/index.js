import ModuleContext from './ModuleContext.js';
import RCE from './RCE.react.jsx';
import React from 'react';

import './react-component-explorer.scss';

var _registry = {};
var _context = null;

export function module(moduleName, exampleBuilder) {
  _context = new ModuleContext(moduleName, exampleBuilder);
  _context.buildExamples();

  _registry[moduleName] = _context;
}

export function example(exampleTitle, exampleRender) {
  if (!_context) {
    throw Error(`No _context to register example for ${exampleTitle}`);
  }

  _context.addExample(exampleTitle, exampleRender);
}

export function render() {
  return (
    <RCE registry={_registry} />
  );
}


// TODO export a default function that takes some config and calls render
// we should be able to config rendering into static html, into a react component, or whatever idk
