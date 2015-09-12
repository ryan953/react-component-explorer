# react component explorer

Get the AMD module located at `react-component-explorer.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactComponentExplorer': 'react-component-explorer'
  }
});

require(['react', 'ReactComponentExplorer'], function(React, ReactComponentExplorer) {

  React.render(React.createElement(ReactComponentExplorer), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
