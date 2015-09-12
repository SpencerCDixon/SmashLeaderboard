// required polyfill for fetch (not currently being used ATM)
import 'babel-core/polyfill';
// Primary Libraries
import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Middleware
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// My code
import App from './containers/App';
import smashLeaderboard from './reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => action.type 
});

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware, logger),
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

// Create store with reducer (smashLeaderboard)
let store = createStoreWithMiddleware(smashLeaderboard);

// Render app on page
let rootElement = document.getElementById('react_app');

// TODO: Make sure dev panel only renders in Development

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <App />}
        </Provider>

        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    )
  }
}


React.render(
  <Root />,
  rootElement
)
