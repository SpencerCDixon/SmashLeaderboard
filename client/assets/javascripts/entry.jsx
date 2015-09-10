import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello World </h1>
    )
  }
}

let rootNode = document.getElementById('react_app');

React.render(<Hello/>, rootNode);

import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

let store = createStore(counter);

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
