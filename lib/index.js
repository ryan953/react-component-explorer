// import ModuleView from './react-component-explorer-module.jsx';
// import ExampleView from './react-component-explorer-example.jsx';
import React from 'react';

import './react-component-explorer.scss';

function toKey(string) {
  return string.replace(' ', '');
}

class ExplorerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      showCode: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({showCode: !this.state.showCode});
  }

  render() {
    var {example} = this.props;
    return (
      <div className="react-component-explorer-example">
        <a href="#" onClick={this.onClick} style={{float: 'right'}}>Toggle Code</a>
        <h3>{example.title}</h3>
        {example.render()}
        {this.state.showCode ? <pre>Code Here</pre> : null}
      </div>
    );
  }
}

class Mod {
  constructor(name) {
    this.name = name;
    this.examples = [];
  }

  addExample(title, render) {
    var nextExample = {
      title,
      render,
    };
    this.examples = this.examples.concat([nextExample]);
  }

  render() {
    return (
      <div
        key={toKey(this.name)}
        className="react-component-explorer-module">
        <h3>{this.name}</h3>
        <hr />
        <ul>
          {this.examples.map((example) =>
            <li key={toKey(example.title)}>
              <ExplorerExample example={example} />
            </li>
          )}
        </ul>
      </div>
    );
  }

}

var moduleRegistry = [];
var modContext;

export function module(modName, exampleBuilder) {
  console.log('creating module', modName, exampleBuilder);
  var mod = new Mod(modName);

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

// module('Header', () => {
//   example('example1', () =>
//     <Header>
//       <span>Some Children</span>
//     </Header>
//   );
// });
