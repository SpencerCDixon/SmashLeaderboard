import { CharacterFilters } from './actions';
import { ADD_CHARACTER, SET_CHARACTER_FILTER } from './actions';
import { combineReducers} from 'redux';
import { REQUEST_CHARACTERS,
         RECEIVE_CHARACTERS,
         REQUEST_USERS,
         RECEIVE_USERS } from './actions';

const initialState = { characterFilter: CharacterFilters.SHOW_ALL };
const initialFetchState = { isFetching: false, didInvalidate: false, items: [] };

function characters(state = initialFetchState, action) {
  switch (action.type) {
  case REQUEST_CHARACTERS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_CHARACTERS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.characters,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

function characterFilter(state = initialState, action) {
  switch (action.type) {
  case SET_CHARACTER_FILTER:
    return Object.assign({}, state, {
    characterFilter: action.filter
  });
  default:
    return state;
  }
}

function users(state = initialFetchState, action) {
  switch (action.type) {
  case REQUEST_USERS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_USERS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.users,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

const smashLeaderboard = combineReducers({
  characters,
  characterFilter,
  users
});

export default smashLeaderboard;
