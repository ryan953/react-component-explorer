import React from 'react/addons';
import ReactComponentExplorer from '../lib/react-component-explorer.jsx';

describe('ReactComponentExplorer', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactComponentExplorer/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-component-explorer');
  });
});
