import React from 'react';

export default class ExampleView extends React.Component {
  constructor() {
    super();

    this.state = {
      showCode: true,
    };
  }

  render() {
    var {example} = this.props;

    return (
      <div className="react-component-explorer-example">
        <div className="react-component-explorer-codeToggle">
          <a href="#" onClick={(e) => {
              e.preventDefault();
              this.setState({showCode: !this.state.showCode});
            }}>
            Toggle Code
          </a>
        </div>
        <h3 className="react-component-explorer-exampleTitle">
          {example.exampleTitle}
        </h3>
        <div className="react-component-explorer-example-container">
          {example.exampleRender()}
        </div>
        <div className="react-component-explorer-code">
          {this.state.showCode ? <pre>{example.exampleRaw}</pre> : null}
        </div>
      </div>
    );
  }
}
