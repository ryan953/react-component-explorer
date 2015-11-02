import ModuleView from './ModuleView.react.jsx';
import React from 'react';

export default class RCE extends React.Component {

  constructor() {
    super();

    this.state = {
      activeModule: null,
    };
  }

  render() {
    var {activeModule} = this.state;
    var {registry} = this.props;

    var contextNames = registry.getContextNames();
    var activeContext = registry.getContextByName(activeModule);

    return (
      <div className="react-component-explorer">
        <h1>All Module Examples</h1>
        <div className="react-component-explorer-navColumn">
          <ul>
            {contextNames.map((name, index) =>
              <li key={'module_' + index}>
                <a href="#" onClick={(e)=> {
                  e.preventDefault();
                  this.setState({activeModule: name});
                }}>
                  {name}
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="react-component-explorer-mainColumn">
          {activeContext
            ? <ModuleView moduleContext={activeContext} />
            : <span>Pick a module</span>
          }
        </div>
      </div>
    );
  }

}
