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
      <div style={{padding: '10'}}>
        <h1>All Module Examples</h1>
        <div style={{float: 'left', width: '20%'}}>
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
        <div style={{float: 'right', width: '80%'}}>
          {activeModule && registry[activeModule]
              ? <ModuleView moduleContext={registry[activeModule]} />
              : <span>Pick a module</span>
          }
        </div>
      </div>
    );
  }

}

