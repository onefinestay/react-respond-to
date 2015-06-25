# react-respond-to

Responsive Component for React

[Demo](http://onefinestay.github.io/react-respond-to/)


## Installation

```shell
npm install --save react-respond-to
```

Note: This library assumes you have the necessary polyfills in place for `Array.prototype.find` and `matchMedia`.

## Basic Usage

Each `Respond` element can query a single media feature (if you want more complex queries, you can nest things). The list of available features is browser-dependent, but they are well-listed elsewhere.

Each `At` element can specify a value to test. The order here is important, because only one child will ever be rendered. Either the last match will be used (look at min-width to understand why this makes sense), or if nothing matches, default will be used. If you don't provide a default, nothing will be rendered.


```javascript
import {Respond, At} from 'react-respond-to';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
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

        <Respond to="max-width" at="850px">
          Only visible up to 850px
        </Respond>        
      </div>
    );
  } 
}
```

## Todo

* Server-side rendering, specifying the server case. We can't assume it's the same as default
* Battle-hardening
* Tests (obviously)