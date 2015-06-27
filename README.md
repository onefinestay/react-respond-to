# react-respond-to

Responsive Component for React

[Demo](http://onefinestay.github.io/react-respond-to/)


## Installation

```shell
npm install --save react-respond-to
```

Note: This library assumes you have the necessary polyfills in place for `Array.prototype.find` and `matchMedia`.

## Why another responsive component?

Simply put, we looked at what was available and didn't find an API to our liking. We had a few goals:

* Abstract away the syntax of media queries a bit, even if it means adding restrictions (we don't allow you to test against multiple features at the same time).
* The API should be obvious without explanation
* Avoid having to specify both min-width and max-width when you have multiple breakpoint. We do this by always picking the last matching child, we should feel intuitive to anyone familiar with the mobile-up pattern for CSS.


## Basic Usage

Each `Respond` element can query a single media feature (if you want more complex queries, you can nest things). The list of available features is browser-dependent, but they are well-listed elsewhere.

Each `At` element can specify a value to test. The order here is important, because only one child will ever be rendered. Either the last match will be used (look at min-width to understand why this makes sense), or if nothing matches, default will be used. If you don't provide a default, nothing will be rendered.

If you only want to check against a single value to decide whether to display a child or not, there's a short-hand where you can specify an `at` property on the `Response` element itself.


```javascript
import {Respond, At} from 'react-respond-to';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
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