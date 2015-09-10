import { CharacterFilters } from './actions'
import { ADD_CHARACTER, SET_CHARACTER_FILTER } from './actions'

const initialState = { characterFilter: CharacterFilters.SHOW_ALL };

function smashLeaderboard(state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTER_FILTER:
      return Object.assign({}, state, {
      characterFilter: action.filter
    });
    default:
      return state;
  }
}

export default smashLeaderboard;
