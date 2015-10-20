import React from 'react';
import ExampleView from './ExampleView.react.jsx';

function toKey(string) {
  return string.replace(' ', '');
}

export default class ModuleView {
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
              <ExampleView example={example} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
