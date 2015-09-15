//////////
// Characters
//////////
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const SET_CHARACTER_FILTER = 'SET_CHARACTER_FILTER';
export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';

export const CharacterFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_MOST_USED: 'SHOW_MOST_USED',
  SHOW_LEAST_USED: 'SHOW_LEAST_USED'
}

export function addCharacter(name) {
  return { type: ADD_CHARACTER, name };
}

export function setCharacterFilter(filter) {
  return { type: SET_CHARACTER_FILTER, filter };
}

export function requestCharacters() {
  return {
    type: REQUEST_CHARACTERS,
  };
}

export function receiveCharacters(data) {
  return {
    type: RECEIVE_CHARACTERS,
    characters: data,
    receivedAt: Date.now()
  };
}

export function fetchCharacters() {
  return function(dispatch) {
    dispatch(requestCharacters());

    return $.getJSON('/characters', function(data) {
      dispatch(receiveCharacters(data))
    });
  }
}

//////////
// Users
//////////
export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function requestUsers() {
  return { type: REQUEST_USERS };
}

export function receiveUsers(data) {
  return {
    type: RECEIVE_USERS,
    users: data,
    receivedAt: Date.now()
  }
}

export function fetchUsers() {
  return function(dispatch) {
    dispatch(requestUsers());

    return $.getJSON('/users', function(data) {
      dispatch(receiveUsers(data));
    });
  }
}

//////////
// Matches
//////////

export const SAVE_MATCH_START = 'SAVE_MATCH_START';
export const SAVE_MATCH_SUCCESS = 'SAVE_MATCH_SUCCESS';
export const REQUEST_MATCHES = 'REQUEST_MATCHES';
export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';

export function requestMatches() {
  return { type: REQUEST_MATCHES };
}

export function receiveMatches(data) {
  return {
    type: RECEIVE_MATCHES,
    matches: data,
    receivedAt: Date.now()
  }
}

export function fetchMatches() {
  return function(dispatch) {
    dispatch(requestMatches());

    return $.getJSON('/matches', function(data) {
      dispatch(receiveMatches(data));
    });
  }
}

export function saveMatchStart() {
  return { type: SAVE_MATCH_START }
}

export function saveMatchSuccess(data) {
  return {
    type: SAVE_MATCH_SUCCESS,
    matches: data,
    receivedAt: Date.now()
  }
}

export function saveMatch(match) {
  return function(dispatch) {
    dispatch(saveMatchStart());

    return $.post('/matches', match, function(data) {
      dispatch(saveMatchSuccess(data));
    })
  }
}


