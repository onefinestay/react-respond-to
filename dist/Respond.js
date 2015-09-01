'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// Convert a value that potentially isn't an array into one
// If it is already an array just return it
function valueToArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

var Respond = _react2['default'].createClass({
  displayName: 'Respond',

  propTypes: {
    to: _react2['default'].PropTypes.string.isRequired,
    children: _react2['default'].PropTypes.any.isRequired,
    at: _react2['default'].PropTypes.any,
    initial: _react2['default'].PropTypes.bool
  },

  getInitialState: function getInitialState() {
    return {
      mounted: false
    };
  },

  componentWillMount: function componentWillMount() {
    this.updateQueries(this.props);
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.updateQueries(props);
  },

  componentDidMount: function componentDidMount() {
    this.setState({ mounted: true });
  },

  componentWillUnmount: function componentWillUnmount() {
    var _this = this;

    this.queries.forEach(function (q) {
      return q[0].removeListener(_this.onMatch);
    });
  },

  onMatch: function onMatch() {
    this.forceUpdate();
  },

  updateQueries: function updateQueries(props) {
    var _this2 = this;

    var to = props.to;
    var children = props.children;
    var at = props.at;

    if (this.queries) {
      this.queries.forEach(function (q) {
        return q[0].removeListener(_this2.onMatch);
      });
    }

    if (at) {
      var queryString = '(' + to + ': ' + at + ')';

      var q = matchMedia(queryString);
      q.addListener(this.onMatch);

      this.queries = [[q, at]];
    } else {
      this.queries = valueToArray(children).filter(function (c) {
        return !c.props['default'];
      }).map(function (c) {
        var v = c.props.value;
        var queryString = '(' + to + ': ' + c.props.value + ')';

        var q = matchMedia(queryString);
        q.addListener(_this2.onMatch);
        return [q, v];
      });
    }
  },

  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var at = _props.at;
    var initial = _props.initial;
    var mounted = this.state.mounted;

    var matches = this.queries.filter(function (q) {
      return q[0].matches;
    });

    if (at) {
      // Shortcut case
      if (!mounted && initial || mounted && matches.length) {
        var result = children;

        if (typeof result === 'string') {
          result = _react2['default'].createElement(
            'span',
            null,
            result
          );
        }

        return result;
      }
    } else {
      var defaultChild = valueToArray(children).find(function (c) {
        return c.props['default'];
      });

      if (matches.length) {
        var _ret = (function () {
          var val = matches[matches.length - 1][1];
          var child = valueToArray(children).find(function (c) {
            return c.props.value === val;
          });

          if (!mounted && child.props.initial || mounted) {
            return {
              v: child
            };
          }
        })();

        if (typeof _ret === 'object') return _ret.v;
      } else if (defaultChild) {
        if (!mounted && defaultChild.props.initial || mounted) {
          return defaultChild;
        }
      }
    }

    return null;
  }
});

exports['default'] = Respond;
module.exports = exports['default'];
