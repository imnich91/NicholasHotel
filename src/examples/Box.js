import React from 'react';7
import ReactDOM from 'react-dom';

var Box = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth,
            windowHeight: window.outerHeight};
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth,
                   windowHeight: window.outerHeight});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
    return <div>Current window width: {this.state.windowWidth},
                Current window height: {this.state.windowHeight}</div>;
  }
});


export default Box;
