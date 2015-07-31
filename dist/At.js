'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var At = _react2['default'].createClass({
  displayName: 'At',

  propTypes: {
    'default': function _default(props, propName) {
      if (props.value || props[propName]) {
        return null;
      }
      return new Error('Must have either a \'value\' or \'default\' prop');
    },
    value: _react2['default'].PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      initial: false,
      'default': false,
      value: null
    };
  },

  render: function render() {
    var result = this.props.children;

    if (typeof result === 'string') {
      result = _react2['default'].createElement(
        'span',
        null,
        result
      );
    }

    return result;
  }
});

exports['default'] = At;
module.exports = exports['default'];