import React from 'react';
import { createStore } from 'redux';
import smashLeaderboard from './reducers';
import { setCharacterFilter, CharacterFilters } from './actions';

let store = createStore(smashLeaderboard);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(setCharacterFilter(CharacterFilters.SHOW_MOST_USED));
store.dispatch(setCharacterFilter(CharacterFilters.SHOW_LEAST_USED));

  unsubscribe();
