import React from 'react/addons';

import {Respond, At} from '../src';


const Index = React.createClass({


  render() {
    return (
      <main>
        <h3>Width</h3>

        <Respond to="min-width">
          <At default>Up to 479px</At>
          <At value="480px">480px &ndash; 849px</At>
          <At value="850px">850px &ndash; 1023px</At>
          <At value="1024px">1024px &ndash; 1399px</At>
          <At value="1400px">1400px upwards</At>
        </Respond>

        <h3>Orientation</h3>

        <Respond to="orientation">
          <At value="landscape">Landscape</At>
          <At value="portrait">Portrait</At>
        </Respond>

        <h3>Pixel Density</h3>

        <Respond to="min-resolution">
          <At value="1dppx">(1x) Old-fashioned</At>
          <At value="2dppx">(2x) Retina-ish</At>
          <At value="3dppx">(3x) The future</At>
        </Respond>

        <h3>Max width (uses short-hand syntax)</h3>

        <Respond to="max-width" at="850px">
          Only visible up to 850px
        </Respond>        

      </main>
    );
  },
});

export default Index;
