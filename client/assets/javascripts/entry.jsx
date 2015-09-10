import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import smashLeaderboard from './reducers';

let store = createStore(smashLeaderboard);
let rootElement = document.getElementById('react_app');

React.render(
  <Provider store={store}>
   {() => <App />}
  </Provider>,
  rootElement
)

