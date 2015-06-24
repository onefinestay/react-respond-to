import React from 'react';


const Respond = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired,
    at: React.PropTypes.any,
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
      this.queries = children.filter(c => !c.props.default).map((c) => {
        const v = c.props.value;
        const queryString = `(${ to }: ${ c.props.value })`;

        let q = matchMedia(queryString);
        q.addListener(this.onMatch);
        return [q, v];
      });      
    }
  },

  componentWillUnmount: function(){
    this.queries.forEach(q => q[0].removeListener(this.onMatch));
  },

  render() {
    const {children, at} = this.props;
    const matches = this.queries.filter(q => q[0].matches);

    if (at) {
      if (matches.length) {
        let val = matches[0];
        let result = children;

        if (typeof result === 'string') {
          result = <span>{result}</span>;
        }        

        return result;
      }
    } else {
      const defaultChild = children.find(c => c.props.default);

      if (matches.length) {
        let val = matches[matches.length - 1][1];
        return children.find(c => c.props.value === val);
      } else if (defaultChild) {
        return defaultChild;
      }      
    } 

    return null;
  },
});


export default Respond;
