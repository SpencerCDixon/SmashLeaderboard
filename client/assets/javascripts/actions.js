import fetch from 'isomorphic-fetch';

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
