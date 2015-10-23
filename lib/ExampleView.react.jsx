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
        <a
          href="#"
          onClick={this.onClick}
          className="react-component-explorer-codeToggle">
          Toggle Code
        </a>
        <h3>{example.exampleTitle}</h3>
        {example.exampleRender()}
        {this.state.showCode ? <pre>Code Here</pre> : null}
      </div>
    );
  }
}
