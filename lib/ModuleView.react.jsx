import ExampleView from './ExampleView.react.jsx';
import React from 'react';

export default class ModuleView extends React.Component {

  render() {
    var {moduleContext} = this.props;
    var name = moduleContext.getName();

    return (
      <div
        key={name}
        className="react-component-explorer-module">
        <h3>{name}</h3>
        <hr />
        <ul>
          {moduleContext.getExamples().map((example) =>
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
