import React from 'react';
import ReactDOM from 'react-dom';

import {
  // Fixed,
  Flex,
  Layout,
} from 'react-layout-pane';

import cx from 'classnames';

var {PropTypes} = React;

var Scrollable = React.createClass({
  propTypes: {
    children: PropTypes.element.isRequired,
  },

  getInitialState() {
    return {
      fadeBefore: false,
      fadeAfter: false,
    };
  },

  updateScrollFade() {
    var scroller = ReactDOM.findDOMNode(this.refs.scroller);
    var wrapper = ReactDOM.findDOMNode(this.refs.wrapper);
    var scrollTop = scroller.scrollTop;
    var maxScroll = wrapper.offsetHeight - scroller.offsetHeight;

    this.setState({
      fadeBefore: scrollTop !== 0,
      fadeAfter: scrollTop !== maxScroll,
    });
  },

  render() {
    var {className, props} = this.props;
    var {fadeBefore, fadeAfter} = this.state;

    return (
      <Layout type='rows' {...props}
        onScroll={this.updateScrollFade}
        className={cx(
          className,
          'Scrollable',
          {
            'Scrollable_FadeBefore': fadeBefore,
            'Scrollable_FadeAfter': fadeAfter,
          }
        )}
      >
        <Flex ref="scroller" className="Scrollable_Scroller">
          <div ref="wrapper">
            {this.props.children}
          </div>
        </Flex>
      </Layout>
    );
  },

});

export default Scrollable;
