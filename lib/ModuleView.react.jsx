import React from 'react';
import ExampleView from './ExampleView.react.jsx';

function toKey(string) {
  // TODO do i need this transform? is `return string` good enough?
  return string.replace(' ', '');
}

export default class ModuleView extends React.Component {

  render() {
    var {moduleContext} = this.props;

    return (
      <div
        key={toKey(moduleContext.moduleName)}
        className="react-component-explorer-module">
        <h3>{moduleContext.moduleName}</h3>
        <hr />
        <ul>
          {moduleContext.examples.map((example) =>
            <li key={toKey(example.exampleTitle)}>
              <ExampleView example={example} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}