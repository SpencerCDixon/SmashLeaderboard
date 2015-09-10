export const ADD_CHARACTER = 'ADD_CHARACTER';
export const SET_CHARACTER_FILTER = 'SET_CHARACTER_FILTER';

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


