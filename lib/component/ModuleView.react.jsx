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
        <ul>
          {moduleContext.getExamples().map((example) =>
            <li className={'react-component-explorer-module-item'} key={example.exampleTitle}>
              <ExampleView example={example} />
            </li>
          )}
        </ul>
      </div>
    );
  }

}
