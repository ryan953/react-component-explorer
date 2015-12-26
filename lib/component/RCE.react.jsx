import ModuleView from './ModuleView.react.jsx';
import React from 'react';
import Scrollable from './Scrollable.react.jsx';

import {
  Fixed,
  Flex,
  Layout,
} from 'react-layout-pane';

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
      <Layout type="column" className="react-component-explorer">
        <Fixed>
          <h1>All Module Examples</h1>
        </Fixed>
        <Flex>
          <Layout type="row">
            <Fixed className="react-component-explorer-navColumn">
              <Scrollable>
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
              </Scrollable>
            </Fixed>
            <Flex className="react-component-explorer-mainColumn">
              <Scrollable>
                {activeContext
                  ? <ModuleView moduleContext={activeContext} />
                  : <span>Pick a module</span>
                }
              </Scrollable>
            </Flex>
          </Layout>
        </Flex>
      </Layout>
    );
  }

}
