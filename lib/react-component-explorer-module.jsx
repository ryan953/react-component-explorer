import React from 'react';
import './react-component-explorer.scss';


export default React.createClass({
  render: function() {
    var {
      name,
    } = this.props.module;

    return (
      <div className="react-component-explorer-module">
        <h3>{name}</h3>
        {this.props.children}
      </div>
    );
  }
});
