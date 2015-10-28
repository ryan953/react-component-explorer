import ExampleView from './ExampleView.react.jsx';
import React from 'react';

export default class ModuleView extends React.Component {

  render() {
    var {moduleContext} = this.props;

    return (
      <div
        key={moduleContext.moduleName}
        className="react-component-explorer-module">
        <h3>{moduleContext.moduleName}</h3>
        <hr />
        <ul>
          {moduleContext.examples.map((example) =>
            <li key={example.exampleTitle}>
              <ExampleView example={example} />
              <hr />
            </li>
          )}
        </ul>
      </div>
    );
  }

}
