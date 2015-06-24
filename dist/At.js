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
    'default': _react2['default'].PropTypes.bool,
    value: _react2['default'].PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      'default': false,
      value: null
    };
  },

  render: function render() {
    return this.props.children;
  }
});

exports['default'] = At;
module.exports = exports['default'];