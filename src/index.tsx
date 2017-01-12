// Do this first to make sure Promises are available to everything
import * as es6Promise from 'es6-promise';

// Polyfill Promise globally
es6Promise.polyfill();

// Libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { todoApp } from '~/reducers';

// My Code
import { App } from '~/components';

// Remove 300ms delay for click events
injectTapEventPlugin();

let store = createStore(todoApp);

const appContainer = document.querySelector('#app-container');

function render() {
  ReactDOM.render(
    <Provider store={ store }><App/></Provider>,
    appContainer,
  );
}

render();
