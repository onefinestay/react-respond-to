import React from 'react';

// Convert a value that potentially isn't an array into one
// If it is already an array just return it
function valueToArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

const Respond = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired,
    at: React.PropTypes.any,
    initial: React.PropTypes.bool,
  },

  getInitialState() {
    return {
      mounted: false,
    };
  },

  componentWillMount() {
    this.updateQueries(this.props);
  },

  componentWillReceiveProps(props) {
    this.updateQueries(props);
  },

  componentDidMount() {
    this.setState({mounted: true});
  },

  componentWillUnmount() {
    this.queries.forEach(q => q[0].removeListener(this.onMatch));
  },

  onMatch() {
    this.forceUpdate();
  },

  updateQueries(props) {
    const {to, children, at} = props;

    if (this.queries) {
      this.queries.forEach(q => q[0].removeListener(this.onMatch));
    }

    if (at) {
      const queryString = `(${ to }: ${ at })`;

      let q = matchMedia(queryString);
      q.addListener(this.onMatch);

      this.queries = [[q, at]];
    } else {
      this.queries = valueToArray(children).filter(c => !c.props.default).map((c) => {
        const v = c.props.value;
        const queryString = `(${ to }: ${ c.props.value })`;

        let q = matchMedia(queryString);
        q.addListener(this.onMatch);
        return [q, v];
      });
    }
  },

  render() {
    const {children, at, initial} = this.props;
    const {mounted} = this.state;
    const matches = this.queries.filter(q => q[0].matches);

    if (at) {
      // Shortcut case
      if ((!mounted && initial) || (mounted && matches.length)) {
        let result = children;

        if (typeof result === 'string') {
          result = <span>{result}</span>;
        }

        return result;
      }
    } else {
      const defaultChild = valueToArray(children).find(c => c.props.default);

      if (matches.length) {
        let val = matches[matches.length - 1][1];
        let child = valueToArray(children).find(c => c.props.value === val);

        if ((!mounted && child.props.initial) || mounted) {
          return child;
        }
      } else if (defaultChild) {
        if ((!mounted && defaultChild.props.initial) || mounted) {
          return defaultChild;
        }
      }
    }

    return null;
  },
});


export default Respond;
