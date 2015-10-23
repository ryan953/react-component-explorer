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

    var moduleNames = Object.keys(registry);

    return (
      <div className="react-component-explorer">
        <h1>All Module Examples</h1>
        <div className="react-component-explorer-navColumn">
          <ul>
            {moduleNames.map((name, index) =>
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
          {activeModule && registry[activeModule]
            ? <ModuleView moduleContext={registry[activeModule]} />
            : <span>Pick a module</span>
          }
        </div>
      </div>
    );
  }

}

