import React from 'react/addons';

import {Respond, At} from '../src';

const Index = React.createClass({


  render() {
    return (
      <main>
        <p>Always visible</p>
        <Respond to="min-width">
          <At default><p>Mobile</p></At>
          <At value="480px"><p>Tablet</p></At>
          <At value="850px"><p>Large Tablet, Small Computer</p></At>
          <At value="1024px"><p>Medium Computer</p></At>
          <At value="1400px"><p>Wide Computer</p></At>
        </Respond>
      </main>
    );
  },
});

export default Index;
