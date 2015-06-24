import React from 'react/addons';

import {Respond, At} from '../src';


const Index = React.createClass({


  render() {
    return (
      <main>
        <h3>Width</h3>

        <Respond to="min-width">
          <At default><p>Up to 479px</p></At>
          <At value="480px"><p>480px &ndash; 849px</p></At>
          <At value="850px"><p>850px &ndash; 1023px</p></At>
          <At value="1024px"><p>1024px &ndash; 1399px</p></At>
          <At value="1400px"><p>1400px upwards</p></At>
        </Respond>

        <h3>Orientation</h3>

        <Respond to="orientation">
          <At value="landscape"><p>Landscape</p></At>
          <At value="portrait"><p>Portrait</p></At>
        </Respond>

        <h3>Pixel Density</h3>

        <Respond to="min-resolution">
          <At value="1dppx"><p>(1x) Old-fashioned</p></At>
          <At value="2dppx"><p>(2x) Retina-ish</p></At>
          <At value="3dppx"><p>(3x) The future</p></At>
        </Respond>

      </main>
    );
  },
});

export default Index;
