import React from 'react';


const At = React.createClass({
  propTypes: {
    default: React.PropTypes.bool,
    value: React.PropTypes.any,
  },

  getDefaultProps() {
    return {
      default: false,
      value: null,
    };
  },

  render() {
    return this.props.children;
  },
});

export default At;
