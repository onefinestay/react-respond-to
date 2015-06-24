import React from 'react';


const At = React.createClass({
  propTypes: {
    default: (props, propName) => {
      if (props.value || props[propName]) {
        return null;
      }
      return new Error(`Must have either a 'value' or 'default' prop`);
    },
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
