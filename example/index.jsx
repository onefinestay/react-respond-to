import React from 'react/addons';

import {Respond, At} from '../src';

const Index = React.createClass({


  render() {
    return (
      <main>
        <p>Always visible</p>
        <Respond to="min-width">
          <At default>Mobile</At>
          <At value="480">Tablet</At>
          <At value="850">Large Tablet, Small Computer</At>
          <At value="1024">Medium Computer</At>
          <At value="1400">Wide Computer</At>
        </Respond>
      </main>
    );
  },
});

export default Index;
