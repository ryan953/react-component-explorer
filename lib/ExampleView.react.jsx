import React from 'react';

export default class ExampleView extends React.Component {
  constructor() {
    super();

    this.state = {
      showCode: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({showCode: !this.state.showCode});
  }

  render() {
    var {example} = this.props;
    return (
      <div className="react-component-explorer-example">
        <a href="#" onClick={this.onClick} style={{float: 'right'}}>Toggle Code</a>
        <h3>{example.title}</h3>
        {example.render()}
        {this.state.showCode ? <pre>Code Here</pre> : null}
      </div>
    );
  }
}
