import React from 'react/addons';


class Base extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>react-respond-to demo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
          <script src="https://cdn.polyfill.io/v1/polyfill.min.js?features=default,Array.from|always,Array.prototype.find|always" />
        </head>
        <body>
          <div id="app"></div>
          <script src="build/index.js"></script>
        </body>
      </html>
    );
  }
}

export default Base;
