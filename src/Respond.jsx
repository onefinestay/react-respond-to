import React from 'react';


const Respond = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired,
  },

  componentWillMount() {
    this.updateQueries(this.props);
  },

  componentWillReceiveProps(props) {
    this.updateQueries(props);
  },

  onMatch() {
    this.forceUpdate();
  },

  updateQueries(props) {
    const {to, children} = props;

    if (this.queries) {
      this.queries.forEach(q => q[0].removeListener(this.onMatch));
    }

    this.queries = children.filter(c => !c.props.default).map((c) => {
      const v = c.props.value;
      const queryString = `(${ to }: ${ c.props.value })`;

      let q = matchMedia(queryString);
      q.addListener(this.onMatch);
      return [q, v];
    });
  },

  componentWillUnmount: function(){
    this.queries.forEach(q => q[0].removeListener(this.onMatch));
  },

  render() {
    const {children} = this.props;
    const defaultChild = children.find(c => c.props.default);
    const matches = this.queries.filter(q => q[0].matches);

    if (matches.length) {
      let val = matches[matches.length - 1][1];
      return children.find(c => c.props.value === val);
    } else if (defaultChild) {
      return defaultChild;
    }
    return null;
  },
});


export default Respond;
