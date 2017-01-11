// Do this first to make sure Promises are available to everything
import * as es6Promise from 'es6-promise';

// Polyfill Promise globally
es6Promise.polyfill();

// Libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as MUI from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Remove 300ms delay for click events
injectTapEventPlugin();

const appContainer = document.querySelector('#app-container');

function render() {
  ReactDOM.render(
    <MuiThemeProvider>
      <MUI.FlatButton label='Hello'/>
    </MuiThemeProvider>,
    appContainer,
  );
}

render();
