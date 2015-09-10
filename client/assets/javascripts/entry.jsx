import 'babel-core/polyfill';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import smashLeaderboard from './reducers';
import { fetchCharacters } from './actions';

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => action.type 
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore)

let store = createStoreWithMiddleware(smashLeaderboard);
let rootElement = document.getElementById('react_app');

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
)
